"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "test",
  "test",
  "test", {
    host: "localhost",
    port: "5400",
    dialect: "postgres",
    operatorsAliases: Sequelize.Op,
    logging: false,
    pool: {
      max: 100,
      min: 1,
      idle: 10000
    }
  }
);

sequelize.authenticate().catch(err => {
  throw err
});

module.exports = sequelize;