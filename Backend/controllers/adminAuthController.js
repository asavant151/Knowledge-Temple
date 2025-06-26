const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const validator = require('validator');
const { generateToken } = require('../config/jwt');
const Admin = require('../models/Admin');

// @desc    Register a new admin (only by superadmin)
// @route   POST /api/admin/auth/register
// @access  Private (Superadmin)
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  // Validation
  if (!name || !email || !password || !confirmPassword || !role) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Please fill in all fields');
  }

  if (!validator.isEmail(email)) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Please enter a valid email');
  }

  if (password.length < 8) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Password must be at least 8 characters');
  }

  if (password !== confirmPassword) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Passwords do not match');
  }

  // Check if admin exists
  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Admin already exists');
  }

  // Create admin
  const admin = await Admin.create({
    name,
    email,
    password,
    confirmPassword,
    role,
  });

  if (admin) {
    res.status(StatusCodes.CREATED).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id, admin.role),
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Invalid admin data');
  }
});

// @desc    Login admin
// @route   POST /api/admin/auth/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate request
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Please provide email and password');
  }

  // Check for admin
  const admin = await Admin.findOne({ email }).select('+password');

  if (!admin) {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error('Invalid credentials');
  }

  // Check if password matches
  const isMatch = await admin.correctPassword(password, admin.password);
  if (!isMatch) {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error('Invalid credentials');
  }

  res.json({
    _id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
    token: generateToken(admin._id, admin.role),
  });
});

// @desc    Get current logged in admin
// @route   GET /api/admin/auth/me
// @access  Private
const getAdminMe = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.user._id).select('-password');

  res.status(StatusCodes.OK).json({
    success: true,
    data: admin,
  });
});

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdminMe,
};