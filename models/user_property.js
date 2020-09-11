"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const UserProperty = sequelize.define("userProperty", {
    user_uuid: {
      type: Sequelize.STRING(32),
      field: "user_uuid",
      primaryKey: "user_property",
      index: true,
    },
    property: {
      type: Sequelize.STRING,
      field: "property",
      primaryKey: "user_property",
    },
    value: {
      type: Sequelize.STRING,
      field: "value",
    }
  }, {
    tableName: "user_properties",
    timestamps: true,
    paranoid: true,
    underscored: true,
  });

  UserProperty.PROPERTY_FIRST_NAME = "first_name";
  UserProperty.PROPERTY_LAST_NAME = "last_name";
  UserProperty.PROPERTY_AVATAR = "avatar"; // image in mongo
  UserProperty.PROPERTY_REFERRALS = "referrals";
  UserProperty.PROPERTY_POLICY_TERMS = "policy_terms";
  UserProperty.PROPERTY_POLICY_PRIVACY = "policy_privacy";
  UserProperty.PROPERTIES = [
    UserProperty.PROPERTY_FIRST_NAME,
    UserProperty.PROPERTY_LAST_NAME,
    UserProperty.PROPERTY_AVATAR,
    UserProperty.PROPERTY_REFERRALS,
    UserProperty.PROPERTY_POLICY_TERMS,
    UserProperty.PROPERTY_POLICY_PRIVACY
  ];

  UserProperty.isValidProperty = (property) => {
    return UserProperty.PROPERTIES.indexOf(property) !== -1;
  };
  return UserProperty
};
