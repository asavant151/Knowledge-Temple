const allRoles = {
  user: ["getUsers", "manageUsers"],
  admin: ["getUsers", "manageUsers", "getAdmins", "manageAdmins", "getSuperAdmins", "manageSuperAdmins"],
  superadmin: ["getUsers", "manageUsers", "getAdmins", "manageAdmins", "getSuperAdmins", "manageSuperAdmins"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
