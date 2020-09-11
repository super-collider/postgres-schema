"use strict";

module.exports = {
  up: function (postgres) {

    let constraints = [
      postgres.getQueryInterface().addConstraint({
				tableName: "module_airflow_configs",
				schema: postgres.options.schema
			}, ["module_uuid"], {
        type: "FOREIGN KEY",
        name: "module_airflow_configs_module_uuid_fkey",
        references: {
          table: {
						tableName: "module_instances",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "module_airflow_deploys",
				schema: postgres.options.schema
			}, ["module_uuid"], {
        type: "FOREIGN KEY",
        name: "module_airflow_deploys_module_uuid_fkey",
        references: {
          table: {
						tableName: "module_instances",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "module_clickstream_destinations",
				schema: postgres.options.schema
			}, ["module_uuid"], {
        type: "FOREIGN KEY",
        name: "module_clickstream_destinations_module_uuid_fkey",
        references: {
          table: {
						tableName: "module_instances",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "module_instances",
				schema: postgres.options.schema
			}, ["creator_uuid"], {
        type: "FOREIGN KEY",
        name: "module_instances_user_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "module_instances",
				schema: postgres.options.schema
			}, ["project_uuid"], {
        type: "FOREIGN KEY",
        name: "module_instances_project_uuid_fkey",
        references: {
          table: {
						tableName: "projects",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "organization_users",
				schema: postgres.options.schema
			}, ["organization_uuid"], {
        type: "FOREIGN KEY",
        name: "organization_users_organization_uuid_fkey",
        references: {
          table: {
						tableName: "organizations",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "organization_users",
				schema: postgres.options.schema
			}, ["user_uuid"], {
        type: "FOREIGN KEY",
        name: "organization_users_user_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "projects",
				schema: postgres.options.schema
			}, ["organization_uuid"], {
        type: "FOREIGN KEY",
        name: "projects_organization_uuid_fkey",
        references: {
          table: {
						tableName: "organizations",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "projects",
				schema: postgres.options.schema
			}, ["creator_uuid"], {
        type: "FOREIGN KEY",
        name: "projects_creator_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "project_users",
				schema: postgres.options.schema
			}, ["project_uuid"], {
        type: "FOREIGN KEY",
        name: "project_users_project_uuid_fkey",
        references: {
          table: {
						tableName: "projects",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "project_users",
				schema: postgres.options.schema
			}, ["user_uuid"], {
        type: "FOREIGN KEY",
        name: "project_users_user_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "services",
				schema: postgres.options.schema
			}, ["creator_uuid"], {
        type: "FOREIGN KEY",
        name: "services_creator_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "user_emails",
				schema: postgres.options.schema
			}, ["user_uuid"], {
        type: "FOREIGN KEY",
        name: "user_emails_user_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "user_emails",
				schema: postgres.options.schema
			}, ["user_uuid", "main"], {
        type: "unique",
        name: "user_emails_user_uuid_main"
      }),
      postgres.getQueryInterface().addConstraint({
				tableName: "user_properties",
				schema: postgres.options.schema
			}, ["user_uuid"], {
        type: "FOREIGN KEY",
        name: "user_properties_user_uuid_fkey",
        references: {
          table: {
						tableName: "users",
						schema: postgres.options.schema
					},
          field: "uuid"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    ];

    return Promise.all(constraints);
  },

  down: function (postgres) {
    let constraints = [
      postgres.getQueryInterface().removeConstraint({
				tableName: "module_airflow_configs",
				schema: postgres.options.schema
			}, "module_airflow_configs_module_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "module_airflow_deploys",
				schema: postgres.options.schema
			}, "module_airflow_deploys_module_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "module_clickstream_destinations",
				schema: postgres.options.schema
			}, "module_clickstream_destinations_module_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "user_emails",
				schema: postgres.options.schema
			}, "user_emails_user_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "module_instances",
				schema: postgres.options.schema
			}, "module_instances_user_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "module_instances",
				schema: postgres.options.schema
			}, "module_instances_project_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "organization_users",
				schema: postgres.options.schema
			}, "organization_users_organization_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "organization_users",
				schema: postgres.options.schema
			}, "organization_users_user_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "projects",
				schema: postgres.options.schema
			}, "projects_organization_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "projects",
				schema: postgres.options.schema
			}, "projects_creator_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "project_users",
				schema: postgres.options.schema
			}, "project_users_project_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "project_users",
				schema: postgres.options.schema
			}, "project_users_user_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "services",
				schema: postgres.options.schema
			}, "services_creator_uuid_fkey"),
      postgres.getQueryInterface().removeConstraint({
				tableName: "user_properties",
				schema: postgres.options.schema
			}, "user_properties_user_uuid_fkey"),
    ];
    return Promise.all(constraints);
  }
};