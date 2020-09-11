'use strict';

const Sequelize = require("sequelize");

const tableName = "project_properties";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      projectUuid: {
        type: Sequelize.STRING(32),
        field: "project_uuid",
        primaryKey: "project_property",
      },
      property: {
        type: Sequelize.STRING,
        field: "property",
        primaryKey: "project_property",
      },
      value: {
        type: Sequelize.STRING,
        field: "value"
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