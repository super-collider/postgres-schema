"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {
  const ModuleAirflowDeploy = sequelize.define("moduleAirflowDeploy", {
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
    deployerUuid: {
      type: Sequelize.STRING(32),
      field: "deployer_uuid",
      index: true,
    },
    artifactId: {
      type: Sequelize.STRING,
      field: "artifact_id",
    },
    origin: {
      type: Sequelize.STRING(16),
      field: "origin",
    }
  }, {
    tableName: "module_airflow_deploys",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  ModuleAirflowDeploy.ORIGIN_CLI = "cli";
  ModuleAirflowDeploy.ORIGIN_WEB = "web";

  ModuleAirflowDeploy.ORIGINS = [
    ModuleAirflowDeploy.ORIGIN_CLI,
    ModuleAirflowDeploy.ORIGIN_WEB
  ];

  ModuleAirflowDeploy.isValidOrigin = (origin) => {
    return ModuleAirflowDeploy.ORIGINS.indexOf(origin);
  };

  return ModuleAirflowDeploy;
};