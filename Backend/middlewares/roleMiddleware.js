const { roleRights } = require('../config/roles');
const { StatusCodes } = require('http-status-codes');

const checkRole = (requiredRights) => (req, res, next) => {
    console.log("role-user",req.user);
    console.log("role-admin",req.admin);
  if (!req.user) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'Forbidden',
    });
  }

  const userRights = roleRights.get(req.user.role) || [];
  const hasRequiredRights = requiredRights.every((requiredRight) =>
    userRights.includes(requiredRight)
  );

  if (!hasRequiredRights) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: 'Forbidden',
    });
  }

  next();
};

module.exports = checkRole;