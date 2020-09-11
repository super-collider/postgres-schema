'use strict';

const Sequelize = require("sequelize");

const tableName = "module_airflow_configs";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      uuid: {
        type: Sequelize.STRING(32),
        field: "uuid",
        primaryKey: true,
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
      airflowApiAuthKey: {
        type: Sequelize.STRING(32),
        field: "airflowApiAuthKey",
      },
      dockerImage: {
        type: Sequelize.STRING(64),
        field: "dockerImage",
      },
      imageLocked: {
        type: Sequelize.STRING(64),
        field: "image_locked",
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
				allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
				allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: "deleted_at"
      }
    });
  },

  down: function (postgres) {
    return postgres.getQueryInterface().dropTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      force: true
    });
  }
};