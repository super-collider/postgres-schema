"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {

  const Service = sequelize.define("service", {
    uuid: {
      type: Sequelize.STRING(32),
      field: 'uuid',
      primaryKey: true,
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    apiKey: {
      type: Sequelize.STRING(32),
      unique: true,
      field: 'api_key',
      defaultValue: function() {
        return Uuid.generate();
      }
    },
    serviceType: {
      type: Sequelize.STRING(16),
      field: "service_type",
    },
    serviceCategory: {
      type: Sequelize.STRING(32),
      field: "service_category",
    },
    serviceUuid: {
      type: Sequelize.STRING(32),
      field: "service_uuid",
      index: true,
      allowNull: true
    },
    creatorUuid: {
      type: Sequelize.STRING(32),
      field: "creator_uuid",
      index: true,
    },
    title: {
      type: Sequelize.STRING(64),
      field: "title"
    }
  }, {
    tableName: "services",
    timestamps: true,
    paranoid: false,
    underscored: true,
  });

  // Service Types: Scoped entities
  Service.TYPE_SYSTEM = "system";
  Service.TYPE_ORGANIZATION = "organization";
  Service.TYPE_PROJECT = "project";
  Service.TYPES = [
    Service.TYPE_SYSTEM,
    Service.TYPE_ORGANIZATION,
    Service.TYPE_PROJECT
  ];

  // Service Categories: Tags dictating platform relations
  Service.CATEGORY_AIRFLOW = "airflow";
  Service.CATEGORY_CLICKSTREAM = "clickstream";
  Service.CATEGORY_SPAWN = "spawn";
  Service.CATEGORIES = [
    Service.CATEGORY_AIRFLOW,
    Service.CATEGORY_CLICKSTREAM,
    Service.CATEGORY_SPAWN
  ];

  // Service Hidden Categories: Service Categories that should never be exposed, nor controlled, by end-users
  Service.HIDDEN_CATEGORIES = [
    Service.CATEGORY_AIRFLOW,
    Service.CATEGORY_CLICKSTREAM
  ];
  Service.isValidType = (type) => {
    return Service.TYPES.indexOf(type) !== -1;
  };
  return Service;
};