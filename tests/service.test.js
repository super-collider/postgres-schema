"use strict";

const Models = require("./setup/models.js");
const DB = require("./setup/db.js");

const User = Models.User;
const Project = Models.Project;
const Organization = Models.Organization;
const Service = Models.Service;

describe("Testing user", function() {

  let org = null;
  let project = null;

  let serviceSystem = null;
  let serviceOrganization = null;
  let serviceProject = null;


  beforeAll(() => {
    return DB.sync({force: true}).then(() => {
      return Organization.create({
        title: 'fred',
        description: 'password'
      });
    }).then((result) => {
      org = result;
      return Project.create({
        orgUuid: org.get("uuid"),
        title: "A project title",
        description: "This is a test project"
      });
    }).then((result) => {
      project = result;
      return Service.create({
        title: "System service",
        serviceType: "system",
        serviceUuid: null,
      });
    }).then((result) => {
      serviceSystem = result;
      return Service.create({
        title: "Organization service",
        serviceType: "organization",
        serviceUuid: org.get("uuid"),
      });
    }).then((result) => {
      serviceOrganization = result;
      return Service.create({
        title: "Project service",
        serviceType: "project",
        serviceUuid: project.get("uuid"),
      });
    }).then((result) => {
      serviceProject = result;
    });
  });

  it("Test", () => {
    expect(true).toEqual(true);
  })
  // it("Select system service", () => {
  //   return Service.findOne({ where: { service_type: 'system' } }).then((service) => {
  //     expect(service.get('apiKey')).toEqual(serviceSystem.get("apiKey"));
  //   });
  // });

  // it("Select organization service", () => {
  //   return Organization.findById(org.get("uuid"), {
  //     include: [
  //       {
  //         model: Service,
  //         as: "services"
  //       }
  //     ]
  //   }).then((organization) => {
  //     console.log(organization);
  //     //expect(service.get('apiKey')).toEqual(serviceSystem.get("apiKey"));
  //   });
  // });

  // it("Select project service", () => {
  //   return Service.findOne({ where: { serviceType: 'system' } }).then((service) => {
  //     expect(service.get('apiKey')).toEqual(serviceSystem.get("apiKey"));
  //   });
  // });
});