"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {

  const ProjectProperty = sequelize.define("projectProperty", {
    projectUuid: {
      type: Sequelize.STRING(32),
      field: "project_uuid",
      primaryKey: "project_property",
    },
    property: {
      type: Sequelize.STRING,
      field: "property",
      primaryKey: "project_property",
    },
    value: {
      type: Sequelize.STRING,
      field: "value"
    }
  }, {
    tableName: "project_properties",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

//ProjectProperty.PROP_*TYPE*      = "";
  return ProjectProperty;
};