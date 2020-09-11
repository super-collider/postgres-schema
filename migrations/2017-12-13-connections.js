'use strict';

const Sequelize = require("sequelize");

const tableName = "connections";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      uuid: {
        type: Sequelize.STRING(32),
        field: "uuid",
        primaryKey: "connection_uuid_unique"
      },
      label: {
        type: Sequelize.STRING(128),
        field: "label",
      },
      code: {
        type: Sequelize.STRING(64),
        field: "code",
      },
      details: {
        type: Sequelize.JSONB,
        field: "details",
				allowNull: false
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
        field: "deleted_at",
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