"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {

  const OrganizationUser = sequelize.define("organizationUser", {
    organizationUuid: {
      type: Sequelize.STRING(32),
      field: "organization_uuid",
      primaryKey: "org_user_unique"
    },
    userUuid: {
      type: Sequelize.STRING(32),
      field: "user_uuid",
      primaryKey: "org_user_unique"
    },
    userRole: {
      type: Sequelize.STRING(16),
      field: "user_role",
    },
  }, {
    tableName: "organization_users",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  OrganizationUser.ROLE_OWNER = "owner";
  OrganizationUser.ROLE_ADMIN = "admin";
  OrganizationUser.ROLE_USER = "user";
  OrganizationUser.ROLE_GUEST = "guest";
  OrganizationUser.ROLES = [
    OrganizationUser.ROLE_OWNER,
    OrganizationUser.ROLE_ADMIN,
    OrganizationUser.ROLE_USER,
    OrganizationUser.ROLE_GUEST,
  ];

  OrganizationUser.isValidRole = (role) => {
    return OrganizationUser.ROLES.indexOf(role) !== -1;
  };

  return OrganizationUser;
};