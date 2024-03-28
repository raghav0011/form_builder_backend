module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define("submissions", {
    form_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    user_data: {
      type: DataTypes.TEXT("long"),
    },
  });
  return Submission;
};
