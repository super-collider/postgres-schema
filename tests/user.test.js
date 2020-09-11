"use strict";

const Models = require("./setup/models.js");
const DB = require("./setup/db.js");

const User = Models.User;

describe("Testing user", function() {

  let uuid = null;

  beforeAll(() => {
    return DB.sync({force: true}).then(() => {
      return User.create({
        username: 'fred',
        password: 'password'
      }).then((user) => {
        uuid = user.get("uuid");
      });
    });
  });

  it("Select user", () => {
    return User.findById(uuid).then((user) => {
      expect(user.get('username')).toEqual("fred");
    });
  });

  it("Update user", () => {
    return User.findById(uuid).then((user) => {
      expect(user.get('superAdmin')).toEqual(false);
      user.set("superAdmin", true);
      return user.save();
    }).then(() => {
      return User.findById(uuid);
    }).then((user) => {
      expect(user.get('superAdmin')).toEqual(true);
    });
  });
});