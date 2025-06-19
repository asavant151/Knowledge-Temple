const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const generateToken = require('../utils/generateToken');
const validateEmail = require('../utils/validateEmail');
const comparePassword = require('../utils/comparePassword');

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
    const { email, password, remember } = req.body;
  
    try {
      // Validate email format
      if (!validateEmail(email)) {
        return next(new ErrorResponse('Invalid email format', 400));
      }
  
      // Check if user exists
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
      }
  
      // Check if password matches
      const isMatch = await comparePassword(password, user.password);
      console.log("isMatch",isMatch);
      if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
      }
  
      // Generate token with remember me option
      const token = generateToken(user._id, remember ? '30d' : '1d');
  
      res.status(200).json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      next(error);
    }
  };

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  const { name, email, password, confirmPassword, terms } = req.body;

  try {
    // Validate email format
    if (!validateEmail(email)) {
      return next(new ErrorResponse('Invalid email format', 400));
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(new ErrorResponse('User already exists', 400));
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      confirmPassword,
      terms // Password will be hashed via pre-save middleware in model
    });

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        confirmPassword: user.confirmPassword,
        terms: user.terms
      }
    });
  } catch (error) {
    next(error);
  }
};