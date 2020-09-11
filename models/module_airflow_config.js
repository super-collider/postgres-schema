"use strict";

const Sequelize = require("sequelize");
const Uuid = require("../utils/uuid");

module.exports = (sequelize) => {
  const ModuleAirflowConfig = sequelize.define("moduleAirflowConfig", {
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
    hostname: {
      type: Sequelize.STRING(64),
      field: "hostname",
      unique: true,
    },
    postgresConnection: {
      type: Sequelize.STRING,
      field: "postgres_connection",
    },
    fernet: {
      type: Sequelize.STRING(64), // should be more than enough, fernet will be base64 encoded version of 32 char string, should never double in size.
      field: "fernet",
    },
    dockerImage: {
      type: Sequelize.STRING(128),
      field: "docker_image",
    },
    lockImage: {
      type: Sequelize.BOOLEAN,
      field: "lock_image",
    },
    airflowApiAuthKey: {
      type: Sequelize.STRING(32),
      field: "airflow_api_auth_key",
    }
  }, {
    tableName: "module_airflow_configs",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  return ModuleAirflowConfig;
};