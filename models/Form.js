module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define("forms", {
    org_id: {
      type: DataTypes.INTEGER,
    },
    form_name: {
      type: DataTypes.STRING,
    },
  });
  return Form;
};
