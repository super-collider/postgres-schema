'use strict';

const Sequelize = require("sequelize");

const tableName = "system_settings";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      property: {
        type: Sequelize.STRING,
        field: "property",
        primaryKey: true,

      },
      value: {
        type: Sequelize.STRING,
        field: "value"
      },
      category: {
        type: Sequelize.STRING,
        field: "category",
        index: true
      },
      encrypted: {
        type: Sequelize.BOOLEAN,
        field: "encrypted",
        defaultValue: false
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