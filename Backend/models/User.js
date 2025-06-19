const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxlength: [50, 'Name cannot exceed 50 characters'],
    minlength: [3, 'Name must be at least 3 characters']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    message: 'Passwords do not match',
    select: false
  },
  terms: {
    type: Boolean,
    required: [true, 'Please accept the terms and conditions'],
    message: 'You must accept the terms and conditions',
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

module.exports = mongoose.model('User', userSchema);