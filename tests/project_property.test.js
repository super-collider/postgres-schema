"use strict";

const Models = require("./setup/models.js");
const DB = require("./setup/db.js");

const Project         = Models.Project;
const ProjectProperty = Models.ProjectProperty;
const Organization    = Models.Organization;
describe("Testing project property", function() {
  let projectTitle = "Test project title";

  let uuid = null;

  beforeAll(() => {
    return DB.sync({force: true}).then(() => {
      return Organization.create({
        title: 'fred',
        description: 'password'
      });
    }).then((org) => {
      return Project.create({
        orgUuid: org.get("uuid"),
        title: projectTitle,
        description: "This is a test project"
      });
    }).then((project) => {
      uuid = project.get("uuid");

      return ProjectProperty.create({
        project_uuid: uuid,
        property: "foo",
        value: "bar"
      });
    });
  });

  it("Select project property", () => {
    return Project.findById(uuid, {
      include: [
        {
          model: ProjectProperty,
          as: "properties"
        }
      ]
    }).then((project) => {
      let properties = project.get("properties")[0];
      expect(properties.get('property')).toEqual("foo");
      expect(properties.get('value')).toEqual("bar");
    });
  })
});