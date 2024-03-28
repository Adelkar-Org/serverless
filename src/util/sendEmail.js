const config = require("../config/config");
const mg = require("../config/mailgun");

async function sendEmail(data, email) {
  try {
    const msg = await mg.messages.create(config.mailgun.domain, {
      from: `WebApp Support <no-reply@${config.mailgun.domain}>`,
      to: [email],
      subject: data.subject,
      text: data.text,
      html: data.html,
    });

    console.log("Email sent successfully:", msg);
    return msg;
  } catch (err) {
    // console.error("Error sending email:", err);
    throw err;
  }
}

module.exports = sendEmail;
