"use strict";

// export function that expects a sequelize connection, which is required to define models
module.exports = (sequelize) => {

  // get model definitions
  const ModuleAirflowConfig           = require("./module_airflow_config.js")(sequelize);
  const ModuleAirflowDeploy           = require("./module_airflow_deploy.js")(sequelize);
  const ModuleClickstreamDestination  = require("./module_clickstream_destination.js")(sequelize);
  const ModuleInstance                = require("./module_instance.js")(sequelize);
  const Organization                  = require("./organization.js")(sequelize);
  const OrganizationUser              = require("./organization_user.js")(sequelize);
  const Project                       = require("./project.js")(sequelize);
  const ProjectProperty               = require("./project_property.js")(sequelize);
  const ProjectUser                   = require("./project_user.js")(sequelize);
  const Service                       = require("./service.js")(sequelize);
  const SystemSetting                 = require("./system_setting.js")(sequelize);
  const User                          = require("./user.js")(sequelize);
  const UserEmail                     = require("./user_email.js")(sequelize);
  const UserProperty                  = require("./user_property.js")(sequelize);

  ModuleInstance.belongsTo(Project, { foreignKey: "project_uuid", sourceKey: "uuid" });

  // Organization associations
  Organization.belongsToMany(User, { as: "users", through: OrganizationUser, foreignKey: 'organization_uuid', otherKey: 'user_uuid'});
  Organization.hasMany(OrganizationUser, { as: "userRoles", foreignKey: 'organization_uuid', sourceKey: 'uuid' });
  Organization.hasMany(Project, { as: "projects", foreignKey: 'org_uuid', sourceKey: 'uuid' });

  // Project associations
  Project.belongsTo(Organization, { as: "organization", foreignKey: "org_uuid", sourceKey: "uuid" });
  Project.hasMany(ProjectProperty, { as: "properties", foreignKey: "project_uuid", sourceKey: "uuid" });
  Project.hasMany(ProjectUser, { as: "OrgRoles", foreignKey: 'project_uuid', sourceKey: 'uuid' });

  // Project.hasMany(ProjectProperty, { foreignKey: "project_uuid", targetKey: "uuid" });

  // // Services
  // I don't think sequelize properly supports polymorphic relationships.. I could be wrong
  // Organization.hasMany(Service, {
  //   as: "services",
  //   foreignKey: {
  //     allowNull: true,
  //     field: "service_uuid"
  //   },
  //   sourceKey: "uuid",
  //   where: {
  //     service_type: "organization"
  //   }
  // });

  // User associations
  User.hasMany(UserEmail, { foreignKey: "user_uuid", sourceKey: "uuid" });
  User.addScope('primaryEmail', {
    include: [{
      model: UserEmail,
      where: { main: true }
    }]
  });

  User.belongsToMany(Organization, { as: "organizations", through: OrganizationUser, foreignKey: 'user_uuid', otherKey: 'organization_uuid'});
  User.hasMany(OrganizationUser, { as: "userRoles", foreignKey: 'user_uuid', sourceKey: 'uuid' });
  User.hasMany(ProjectUser, { as: "ProjectRoles", foreignKey: 'user_uuid', sourceKey: 'uuid' });


  return {
    ModuleAirflowConfig:          ModuleAirflowConfig,
    ModuleAirflowDeploy:          ModuleAirflowDeploy,
    ModuleClickstreamDestination: ModuleClickstreamDestination,
    ModuleInstance:               ModuleInstance,
    Organization:                 Organization,
    OrganizationUser:             OrganizationUser,
    Project:                      Project,
    ProjectProperty:              ProjectProperty,
    ProjectUser:                  ProjectUser,
    Service:                      Service,
    SystemSetting:                SystemSetting,
    User:                         User,
    UserEmail:                    UserEmail,
    UserProperty:                 UserProperty,
  };
};