"use strict";

const Models = require("./setup/models.js");
const DB = require("./setup/db.js");

const Email = Models.Email;
const User = Models.User;
const Organization = Models.Organization;
const OrganizationUser = Models.OrganizationUser;

describe("Testing organization", function() {

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
      return OrganizationUser.create({
        organizationUuid: org.get("uuid"),
        userUuid: user.get("uuid")
      });
    });
  });

  it("Select organization", () => {
    return Organization.findById(org.get("uuid")).then((organization) => {
      expect(organization.get('title')).toEqual(org.get("title"));
    });
  });

  it("Select user's organizations", () => {
    return User.findById(user.get("uuid"), {
      include: [
        {
          model: Organization,
          as: "organizations"
        },
        {
          model: OrganizationUser,
          as: "userRoles"
        }
      ]
    }).then((user) => {
      let organizations = user.get("organizations");
      expect(organizations[0].get("title")).toEqual(org.get("title"));
    });
  });

  it("Select organization's users", () => {
    return Organization.findById(org.get("uuid"), {
      include: [
        {
          model: User,
          as: "users"
        },
        {
          model: OrganizationUser,
          as: "userRoles"
        }
      ]
    }).then((organization) => {
      let users = organization.get("users");
      expect(users[0].get("username")).toEqual("fred");
    });
  });
});