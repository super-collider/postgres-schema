"use strict";

const Models = require("./setup/models.js");
const DB = require("./setup/db.js");

const Project       = Models.Project;
const User          = Models.User;
const Organization  = Models.Organization;

describe("Testing project", function() {

  let project = null;
  let user = null;
  let org = null;
  beforeAll(() => {
    return DB.sync({force: true}).then(() => {
      return User.create({
        username: 'fred',
        password: 'password'
      });
    }).then((result) => {
      user = result;
      return Organization.create({
        title: 'fred',
        description: 'password'
      });
    }).then((result) => {
      org = result;
      return Project.create({
        creatorUuuid: user.get("uuid"),
        orgUuid: org.get("uuid"),
        title: "Test project title",
        description: "This is a test project"
      }).then((result) => {
        project = result;
      });
    });
  });

  it("Select project", () => {
    return Project.findById(project.get("uuid")).then((result) => {
      expect(result.get('title')).toEqual(project.get("title"));
    });
  });

  it("Update project", () => {
    return Project.findById(project.get("uuid")).then((result) => {
      result.set("creatorUuid", "12345");
      return result.save();
    }).then(() => {
      return Project.findById(project.get("uuid"));
    }).then((result) => {
      expect(result.get('creatorUuid')).toEqual("12345");
    });
  })
});