const formData = require("form-data");
const Mailgun = require("mailgun.js");
const dotenv = require("dotenv");
dotenv.config();
const generateVerificationLink = require("./generateToken");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  do1main: process.env.MAILGUN_DOMAIN,
});

function sendEmail(userData) {
  const link = generateVerificationLink(userData.email);
  // save the token in the database

  console.log("Sending email to", userData.email, "with link", link);
  // mg.messages
  //   .create(process.env.MAILGUN_DOMAIN, {
  //     from: `WebApp User <no-reply@${process.env.MAILGUN_DOMAIN}>`,
  //     to: [userData.email],
  //     subject: "Verification Email",
  //     text: `
  //       Hello,
  //       Please click the link to verify your email address.
  //       ${link}
  //       Best Regards,
  //       Adelkar org
  //       To unsubscribe to these emails, please click here ${link}.
  //       Adelkar Org
  //       Washington St, Bostom, MA 02130
  //       `,
  //     html: `
  //       <html>
  //       <body>
  //       <h1>Verification Email</h1>
  //       <p>Hello,</p>
  //       <p>Please click the link to verify your email address.</p>
  //       <a href=${link}>Verify Email</a>
  //       <p>Best Regards,<br />adelkar org</p>
  //       <p>
  //       To unsubscribe to these emails, please click
  //       <a href="link">here</a>.
  //       </p>
  //       <p>Adelkar Org<br />Washington St, Bostom, MA 02130</p>
  //       </body>
  //       </html>
  //   `,
  //   })
  //   .then((msg) => console.log(msg)) // logs response data
  //   .catch((err) => console.log(err)); // logs any error
}

module.exports = sendEmail;
