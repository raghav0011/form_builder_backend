module.exports = (sequelize, DataTypes) => {
  const FormField = sequelize.define("form_fields", {
    form_id: {
      type: DataTypes.INTEGER,
    },
    field_type: {
      type: DataTypes.STRING,
    },
    field_label: {
      type: DataTypes.STRING,
    },
    field_options: {
      type: DataTypes.STRING,
    },
    field_order: {
      type: DataTypes.STRING,
    },
  });
  return FormField;
};
