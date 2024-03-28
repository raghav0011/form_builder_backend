module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "R@ghavmessi10",
  DB: "form_builder",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
