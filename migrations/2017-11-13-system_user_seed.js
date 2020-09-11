'use strict';

module.exports = {
  up: function (postgres) {
    const User = require("../models/user.js")(postgres);
    return User.create({
      username: 'sys_admin',
      password: 'qwertyuiopasdfghjklzxcvbnm',
      superAdmin:1,
      status: "active"
    });
  },

  down: function (postgres) {
    const User = require("../models/user.js")(postgres);
    return User.findOne({ where: {username: 'sys_admin'} }).then(user => {
      return user.destroy();
    });
  }
};