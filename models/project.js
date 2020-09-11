"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {

  const Project = sequelize.define("project", {
    uuid: {
      type: Sequelize.STRING(32),
      field: "uuid",
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    organizationUuid: {
      type: Sequelize.STRING(32),
      field: "organization_uuid",
      index: true,
    },
    creatorUuid: {
      type: Sequelize.STRING(32),
      field: "creator_uuid",
      index: true,
    },
    title: {
      type: Sequelize.STRING,
      field: "title",
    },
    description: {
      type: Sequelize.TEXT,
      field: "description"
    },
  }, {
    tableName: "projects",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
  return Project;
};