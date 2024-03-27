const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key:
    process.env.MAILGUN_API_KEY ||
    "44dc7593b5bb177d7bb7d4b34cfe232c-f68a26c9-f1ab8409",
  domain:
    process.env.MAILGUN_DOMAIN ||
    "sandbox81b17e880b684407831b06ebdf43d940.mailgun.org",
});
const link = "http://adelkar.me";
mg.messages
  .create("sandbox81b17e880b684407831b06ebdf43d940.mailgun.org", {
    from: "Excited User <mailgun@sandbox81b17e880b684407831b06ebdf43d940.mailgun.org>",
    to: ["mihir.adelkar@gmail.com"],
    subject: "Hello",
    text: `Please click the link to verify your email address.
        ${link}
        `,
    html: `
        <html>
        <body>
    <h1>Verification Email</h1>
    <p>Hello,</p>
    <p>Please click the link to verify your email address.</p>
    <a href=${link}>Verify Email</a>
    <p>Best Regards,<br />adelkar org</p>
    <p>
    To unsubscribe to these emails, please click
    <a href="link">here</a>.
    </p>
    <p>Husky Org<br />Washington St, Bostom, MA 02130</p>
    </body>
    </html>
    `,
  })
  .then((msg) => console.log(msg)) // logs response data
  .catch((err) => console.log(err)); // logs any error
