'use strict';

const Sequelize = require("sequelize");

const tableName = "organizations";

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
      title: {
        type: Sequelize.STRING(64),
        field: "title",
      },
      description: {
        type: Sequelize.TEXT,
        field: "description",
      },
      plan: {
        type: Sequelize.STRING(32),
        field: "plan"
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        field: "enabled",
        defaultValue: true,
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