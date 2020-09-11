"use strict";

/// Test migration, creating the schema in a localhost postgres.
/// Assumes it will be run from project root


const Umzug = require("umzug");
const Sequelize = require("sequelize");

const Postgres = new Sequelize("postgres://test:test@localhost:5400/test", {
    dialect: "postgres",
    logging: false,
    schema: "public",
    pool: {
      max: 30,
      min: 1,
      idle: 10000
    }
  }
);

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: Postgres,
    tableName: "migrations",
    schema: Postgres.schema,
  },

  logging: (message) => {
    console.log("Migration run");
    console.log(message);
  },

  migrations: {
    params: [Postgres],
    path: './migrations',

    // The pattern that determines whether or not a file is a migration.
    pattern: /^\d+[\w-]+\.js$/,
  }
});

umzug.up().then((migrations) => {
  console.log("Migrations run");
  console.log(migrations);
  process.exit();
});