require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes

const User = require("../models/User")(sequelize, DataTypes);
const Org = require("../models/Organization")(sequelize, DataTypes);
const Form = require('../models/Form')(sequelize, DataTypes);
const FormField = require('../models/FormField')(sequelize, DataTypes);
const Submission = require("../models/Submission")(sequelize, DataTypes);

Form.hasMany(FormField, { foreignKey: 'form_id' });
FormField.belongsTo(Form, { foreignKey: "form_id" });

Form.hasMany(Submission, { foreignKey: "form_id" });
Submission.belongsTo(Form, { foreignKey: "form_id" });

module.exports = { db, Form, FormField, Submission };