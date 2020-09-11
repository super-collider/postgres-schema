'use strict';

const Sequelize = require("sequelize");

const tableName = "module_instances";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      uuid: {
        type: Sequelize.STRING(32),
        primaryKey: true,
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
        type: Sequelize.STRING,
        field: "version",
      },
      writeKey: {
        type: Sequelize.STRING,
        field: "write_key"
      },
      type: {
        type: Sequelize.STRING(16),
        field: "type",
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