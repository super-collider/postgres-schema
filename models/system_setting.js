"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {

  const Organization = sequelize.define("systemSetting", {
    property: {
      type: Sequelize.STRING,
      field: "property",
      primaryKey: true,

    },
    value: {
      type: Sequelize.STRING,
      field: "value"
    },
    category: {
      type: Sequelize.STRING,
      field: "category",
      index: true
    },
    encrypted: {
      type: Sequelize.BOOLEAN,
      field: "encrypted",
      defaultValue: false
    }
  }, {
    tableName: "system_settings",
    timestamps: true,
    paranoid: false,
    underscored: true,
  });

  Organization.CATEGORY_GENERAL = "general";
  Organization.CATEGORY_INSTALL = "install";
  Organization.CATEGORY_AIRFLOW = "airflow";
  Organization.CATEGORY_CLICKSTREAM = "clickstream";
  Organization.CATEGORY_CLICKSTREAM_INTEGRATIONS = "integrations";
  Organization.CATEGORIES = [
    Organization.CATEGORY_GENERAL,
    Organization.CATEGORY_INSTALL,
    Organization.CATEGORY_AIRFLOW,
    Organization.CATEGORY_CLICKSTREAM,
    Organization.CATEGORY_CLICKSTREAM_INTEGRATIONS
  ];

  Organization.isValidCategory = (category) => {
    return Organization.CATEGORIES.indexOf(category) !== -1;
  };

  return Organization;
};