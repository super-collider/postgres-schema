'use strict';

const Sequelize = require("sequelize");

const tableName = "module_airflow_deploys";

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