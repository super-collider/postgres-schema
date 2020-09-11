"use strict";

const CryptoRandom = require('crypto-random-string');

module.exports = {
  generate: function(length = 32) {
    return CryptoRandom(length);
  }
};