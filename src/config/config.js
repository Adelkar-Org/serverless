const dotenv = require("dotenv");
dotenv.config();

const config = {
  mailgun: {
    username: process.env.MAILGUN_USERNAME || "api",
    key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = config;
