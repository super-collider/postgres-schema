'use strict';

const Sequelize = require("sequelize");

const tableName = "organization_users";

module.exports = {
  up: function (postgres) {
    return postgres.getQueryInterface().createTable({
      tableName: tableName,
      schema: postgres.options.schema
    }, {
      organizationUuid: {
        type: Sequelize.STRING(32),
        field: "organization_uuid",
        primaryKey: "org_user_unique"
      },
      userUuid: {
        type: Sequelize.STRING(32),
        field: "user_uuid",
        primaryKey: "org_user_unique"
      },
      userRole: {
        type: Sequelize.STRING(16),
        field: "user_role",
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