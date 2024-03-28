const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.org = require("./Organization.js")(sequelize, DataTypes)
db.user = require("./User.js")(sequelize, DataTypes)
db.form = require("./Form.js")(sequelize, DataTypes)
db.submission = require("./Submission.js")(sequelize, DataTypes)
db.formfield = require("./FormField.js")(sequelize,DataTypes)

module.exports = db;