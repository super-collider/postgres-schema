'use strict';

const Sequelize = require("sequelize");

const tableName = "user_emails";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      id: {
        type: Sequelize.INTEGER,
        field: "id",
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: Sequelize.STRING,
        field: "address",
      },
      userUuid: {
        type: Sequelize.STRING(32),
        field: "user_uuid",
      },
      token: {
        type: Sequelize.STRING,
        field: "token",
      },
      verified: {
        type: Sequelize.DATE,
        field: "verified"
      },
      main: {
        type: Sequelize.BOOLEAN,
        field: "main",
        defaultValue: false,
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