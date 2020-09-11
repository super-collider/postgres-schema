"use strict";

const DB = require("./db.js");
const Models = require("../../models/index.js");

let models = Models(DB);

module.exports = models;