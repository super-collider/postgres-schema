"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    uuid: {
      type: Sequelize.STRING(32),
      field: "uuid",
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    username: {
      type: Sequelize.STRING(64),
      field: "username",
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      field: "password",
    },
    superAdmin: {
      type: Sequelize.BOOLEAN,
      field: "super_admin",
      defaultValue: false,
    },
    status: {
      type: Sequelize.STRING(16),
      field: "status",
    },
  }, {
    tableName: "users",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  User.STATUS_INACTIVE = "inactive";
  User.STATUS_ACTIVE = "active";
  User.STATUS_PENDING = "pending";
  User.STATUS_LOCKED = "locked";
  User.STATUSES = [
    User.STATUS_INACTIVE,
    User.STATUS_ACTIVE,
    User.STATUS_PENDING,
    User.STATUS_LOCKED
  ];

  User.isValidStatus = (status) => {
    return User.STATUSES.indexOf(status) !== -1;
  };

  return User
};