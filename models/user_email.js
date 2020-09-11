"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {
  const Email = sequelize.define('email', {
    id: {
      type: Sequelize.INTEGER,
      field: "id",
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: Sequelize.STRING,
      field: "address",
    },
    userUuid: {
      type: Sequelize.STRING(32),
      field: "user_uuid",
    },
    token: {
      type: Sequelize.STRING,
      field: "token",
      defaultValue: function() {
        return Email.generateToken();
      }
    },
    main: {
      type: Sequelize.BOOLEAN,
      field: "main",
      defaultValue: false,
    },
    verified: {
      type: Sequelize.DATE,
      field: "verified"
    }
  }, {
    tableName: "user_emails",
    timestamps: true,
    paranoid: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['user_uuid', 'main']
      }
    ]
  });

  Email.generateToken = () => {
    return Uuid.generate();
  };
  return Email;
};