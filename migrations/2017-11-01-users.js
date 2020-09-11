'use strict';

const Sequelize = require("sequelize");

const tableName = "users";

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
      username: {
        type: Sequelize.STRING(64),
        field: "username",
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        field: "password",
      },
      superAdmin: {
        type: Sequelize.BOOLEAN,
        field: "super_admin",
        defaultValue: false,
      },
      status: {
        type: Sequelize.STRING(16),
        field: "status",
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