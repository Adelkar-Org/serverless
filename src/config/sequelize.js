const Sequelize = require("sequelize");
const config = require("./config");
// const logger = require("../utils/logger");

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    sequelize
      .sync({ alter: true, force: false })
      .then(() => console.log("Database connection and sync successfully."))
      .catch((err) => {
        // logger.error({ message: "Database sync error.", error: err });
        console.log("Database sync error.", err);
      });
  })
  .catch((err) => {
    // logger.error({ message: "Database connection error.", error: err });
    console.log("Database connection error.", err);
  });

module.exports = sequelize;
