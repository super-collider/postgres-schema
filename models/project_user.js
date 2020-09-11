"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {

  const ProjectUser = sequelize.define("projectUser", {
    organizationUuid: {
      type: Sequelize.STRING(32),
      field: "project_uuid",
      primaryKey: "project_user_unique"
    },
    userUuid: {
      type: Sequelize.STRING(32),
      field: "user_uuid",
      primaryKey: "project_user_unique"
    },
    userRole: {
      type: Sequelize.STRING(16), //"owner", "admin", "user",
      field: "user_role",
    },
  }, {
    tableName: "project_users",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  ProjectUser.ROLE_OWNER = "owner";
  ProjectUser.ROLE_ADMIN = "admin";
  ProjectUser.ROLE_USER = "user";
  ProjectUser.ROLE_GUEST = "guest";
  ProjectUser.ROLES = [
    ProjectUser.ROLE_OWNER,
    ProjectUser.ROLE_ADMIN,
    ProjectUser.ROLE_USER,
    ProjectUser.ROLE_GUEST,
  ];

  ProjectUser.isValidRole = (role) => {
    return ProjectUser.ROLES.indexOf(role) !== -1;

  };

  return ProjectUser;
};