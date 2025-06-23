const User = require("../models/User");
const Otp = require("../models/Otp");
const generateToken = require("../config/jwt");
const asyncHandler = require("express-async-handler");
const validator = require("validator");
const sendEmail = require("../config/email");
const generateOtp = require("../utils/generateOtp");
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword, termsAccepted } = req.body;
  // Validation
  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please fll in all felds");
  }
  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Please enter a valid email");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }
  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Passwords do not match");
  }
  if (!termsAccepted) {
    res.status(400);
    throw new Error("You must accept the terms and conditions");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // Create user
  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
    termsAccepted,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
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
    res.status(400);
    throw new Error("Please provide email and password");
  }
  // Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }
  // Check if password matches
  const isMatch = await user.correctPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
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
    res.status(404);
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
    res.status(400);
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
  });
});
// @desc    Reset Password
// @route   PATCH /api/auth/reset-password/:token
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password, confrmPassword } = req.body;
  // 1) Get user based on the token
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    res.status(400);
    throw new Error("Token is invalid or has expired");
  }
  if (password !== confrmPassword) {
    res.status(400);
    throw new Error("Passwords do not match");
  }
  // 3) Update password and clear reset token felds
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  // 4) Log the user in, send JWT
  const authToken = generateToken(user._id);
  res.status(200).json({
    status: "success",
    token: authToken,
    data: {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    },
  });
});
module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
};
