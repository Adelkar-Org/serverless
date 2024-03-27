const FormData = require("form-data");
const Mailgun = require("mailgun.js");
const config = require("./config");

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: config.mailgun.username,
  key: config.mailgun.key,
  domain: config.mailgun.domain,
});

module.exports = mg;
