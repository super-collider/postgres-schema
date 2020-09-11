"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {

  const Connection = sequelize.define("connection", {
    uuid: {
      type: Sequelize.STRING(32),
      field: "uuid",
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    label: {
      type: Sequelize.STRING(128),
      field: "label",
    },
    code: {
      type: Sequelize.STRING(64),
      field: "code",
    },
    details: {
      type: Sequelize.JSONB,
      field: "details"
    }
  }, {
    tableName: "connections",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return Connection;
};