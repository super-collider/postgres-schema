"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {
  const ModuleClickstreamDestination = sequelize.define("moduleClickstreamDestination", {
    uuid: {
      type: Sequelize.STRING(32),
      field: "uuid",
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    moduleUuid: {
      type: Sequelize.STRING(32),
      field: "module_uuid",
      index: true,
    },
    integrationType: {
      type: Sequelize.STRING(64),
      field: "integration_type",
    },
    title: {
      type: Sequelize.STRING(64),
      field: "title",
    },
    connectionUuid: {
      type: Sequelize.STRING(32),
      field: "connection_uuid",
    },
    config: {
      type: Sequelize.JSONB, // hopefully this doesn't cause problems?!?!?
      field: "config",
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      field: "enabled",
    }
  }, {
    tableName: "module_clickstream_destinations",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  return ModuleClickstreamDestination;
};