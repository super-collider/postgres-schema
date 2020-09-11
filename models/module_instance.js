"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {
  const ModuleInstance = sequelize.define("moduleInstance", {
    uuid: {
      type: Sequelize.STRING(32),
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    projectUuid: {
      type: Sequelize.STRING(32),
      field: "project_uuid",
    },
    creatorUuid: {
      type: Sequelize.STRING(32),
      field: "creator_uuid",
    },
    title: {
      type: Sequelize.STRING(64),
      field: "title",
    },
    platform: {
      type: Sequelize.STRING(16),
      field: "platform",
    },
    version: {
      type: Sequelize.STRING(16),
      field: "version",
    },
    type: {
      type: Sequelize.STRING(16),
      field: "type",
    }
  }, {
    tableName: "module_instances",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  ModuleInstance.PLATFORM_ANALYTICS = "analytics.js";
  ModuleInstance.PLATFORM_SERVER = "server";
  ModuleInstance.PLATFORM_IOS = "ios";
  ModuleInstance.PLATFORM_ANDROID = "android";
  ModuleInstance.PLATFORMS = [
    ModuleInstance.PLATFORM_ANALYTICS ,
    ModuleInstance.PLATFORM_SERVER,
    ModuleInstance.PLATFORM_IOS,
    ModuleInstance.PLATFORM_ANDROID
  ];

  ModuleInstance.TYPE_AIRFLOW = "airflow";
  ModuleInstance.TYPE_CLICKSTREAM = "clickstream";
  ModuleInstance.TYPES = [
    ModuleInstance.TYPE_AIRFLOW,
    ModuleInstance.TYPE_CLICKSTREAM
  ];

  ModuleInstance.isValidPlatform = (platform) => {
    return ModuleInstance.PLATFORMS.indexOf(platform) !== -1;
  };

  ModuleInstance.isValidType = (type) => {
    return ModuleInstance.TYPES.indexOf(type) !== -1;
  };

  return ModuleInstance;
};