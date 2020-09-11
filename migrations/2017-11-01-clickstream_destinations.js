'use strict';

const Sequelize = require("sequelize");

const tableName = "module_clickstream_destinations";

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