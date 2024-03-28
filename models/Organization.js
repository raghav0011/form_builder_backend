module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define("organizations", {
    org_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  return Organization;
};
