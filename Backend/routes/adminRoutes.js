const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/roleMiddleware');
const {
  registerAdmin,
  loginAdmin,
  getAdminMe,
} = require('../controllers/adminAuthController');

router.post('/auth/register', protect, checkRole(['manageAdmins']), registerAdmin);
router.post('/auth/login', loginAdmin);
router.get('/auth/me', protect, checkRole(['getAdmins']), getAdminMe);

module.exports = router;