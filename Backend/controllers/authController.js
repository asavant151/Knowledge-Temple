const User = require("../models/User");
const Otp = require("../models/Otp");
const { generateToken } = require("../config/jwt");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require('http-status-codes');
const validator = require("validator");
const sendEmail = require("../config/email");
const generateOtp = require("../utils/generateOtp");
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword, termsAccepted, role } = req.body;
  // Validation
  if (!name || !email || !password || !confirmPassword || !role) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Please fill in all fields");
  }
  if (!validator.isEmail(email)) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Please enter a valid email");
  }
  if (password.length < 6) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Password must be at least 6 characters");
  }
  if (password !== confirmPassword) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Passwords do not match");
  }
  if (!termsAccepted) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("You must accept the terms and conditions");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("User already exists");
  }

  if (role !== "user" && role !== "premium" && role !== "admin" && role !== "superadmin") {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Invalid role");
  }
  // Create user
  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
    termsAccepted,
    role,
  });
  if (user) {
    res.status(StatusCodes.CREATED).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Invalid user data");
  }
});
// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Validate request
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Please provide email and password");
  }
  // Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error("Invalid credentials");
  }
  // Check if password matches
  const isMatch = await user.correctPassword(password);
  if (!isMatch) {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error("Invalid credentials");
  }
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
});

// @desc    Forgot Password - Send OTP
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // 1) Check if email exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(StatusCodes.NOT_FOUND);
    throw new Error("User not found with this email");
  }
  // 2) Generate OTP
  const otp = generateOtp();
  // 3) Save OTP to database
  await Otp.create({
    email,
    otp,
  });
  // 4) Send OTP to user's email

  const message = `Your password reset OTP is: ${otp}\nThis OTP is valid for 10 minutes.`;
  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset OTP (valid for 10 min)",
      message,
    });
    res.status(200).json({
      status: "success",
      message: "OTP sent to email!",
    });
  } catch (err) {
    // Remove OTP from DB if email sending fails
    await Otp.deleteOne({ email });

    res.status(500);
    throw new Error("There was an error sending the email. Try again later!");
  }
});
// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  // 1) Find the OTP in database
  const otpRecord = await Otp.findOne({ email, otp });
  if (!otpRecord) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Invalid OTP or OTP expired");
  }
  // 2) Delete the OTP after verifcation
  // await Otp.deleteOne({ email, otp });
  // 3) Generate a reset token
  const user = await User.findOne({ email });
  const resetTokenPromise = user.createPasswordResetToken();
  const resetToken = await resetTokenPromise;
  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: "OTP verifed successfully",
    resetToken,
    email,
  });
});
// @desc    Reset Password
// @route   POST /api/auth/reset-password
// @access  Public
// @desc    Reset Password
// @route   POST /api/auth/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const { token, email, password, confirmPassword } = req.body;

  if (!token || !email || !password || !confirmPassword) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: "Please provide all required fields" });
  }

  if (password !== confirmPassword) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: "Passwords do not match" });
  }

  try {
    // 1) Hash the token exactly like we did when creating it
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // 2) Find user by email AND hashed token
    const user = await User.findOne({
      email,
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() } // Check if token is not expired
    });

    if (!user) {
      // More detailed error message
      const potentialUser = await User.findOne({ email });
      if (!potentialUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "User not found" });
      }
      
      const tokenValid = potentialUser.passwordResetToken === hashedToken;
      const tokenExpired = potentialUser.passwordResetExpires <= Date.now();
      
      if (!tokenValid) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid reset token" });
      }
      if (tokenExpired) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Reset token has expired" });
      }
      
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid token or token expired" });
    }

    // 3) Check if new password is different from current password
    const isSamePassword = await bcrypt.compare(password, user.password || '');
    if (isSamePassword) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: "New password cannot be the same as old password" 
      });
    }

    // 4) Update password and clear reset token fields
    user.password = password;
    user.confirmPassword = confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    
    await user.save();

    // 5) Send confirmation email
    const message = `Your password has been successfully changed.`;
    await sendEmail({
      email: user.email,
      subject: "Password changed successfully",
      message,
    });

    res.status(StatusCodes.OK).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
      message: "Error resetting password",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');

  res.status(StatusCodes.OK).json({
    success: true,
    data: user,
  });
});

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
  getMe,
};
