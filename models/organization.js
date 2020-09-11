"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {

  const Organization = sequelize.define("organization", {
    uuid: {
      type: Sequelize.STRING(32),
      field: "uuid",
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    title: {
      type: Sequelize.STRING(64),
      field: "title",
    },
    description: {
      type: Sequelize.TEXT,
      field: "description",
    },
    plan: {
      type: Sequelize.STRING(32),
      field: "plan"
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      field: "enabled",
      defaultValue: true,
    },
    // batch: {
    //   hostname: String,
    //   connection: String,
    //   dagURI: String,
    //   fernet: String
    // },


  }, {
    tableName: "organizations",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return Organization;
};