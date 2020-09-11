'use strict';

const Sequelize = require("sequelize");

const tableName = "services";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      uuid: {
        type: Sequelize.STRING(32),
        field: 'uuid',
        primaryKey: true,
      },
      apiKey: {
        type: Sequelize.STRING(32),
        field: 'api_key',
        unique: true,
      },
      serviceType: {
        type: Sequelize.STRING(16),
        field: "service_type",
      },
      serviceCategory: {
        type: Sequelize.STRING(32),
        field: "service_category",
      },
      serviceUuid: {
        type: Sequelize.STRING(32),
        field: "service_uuid",
        index: true,
        allowNull: true
      },
      creatorUuid: {
        type: Sequelize.STRING(32),
        field: "creator_uuid",
        index: true,
      },
      title: {
        type: Sequelize.STRING(64),
        field: "title",
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