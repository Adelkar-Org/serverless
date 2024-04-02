function verifyEmailTemplate(userData, link) {
  if (!userData || !userData.first_name || !userData.email || !link)
    throw new Error("Invalid user data or missing link");
  unsubscribeLink = `adelkar.me:8080/v1/auth/unsubscribe?email=${userData.email}`;
  return {
    subject: "Verification Email",
    text: `
Verification Email
Hello ${userData.first_name},

Please click the link below to verify your email address.

Verify Email-${link} 

Best Regards,
Adelkar Org

To unsubscribe from these emails, please click here ${unsubscribeLink}.

Adelkar Org
Washington St, Boston, MA 02130
`,
    html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verification Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        line-height: 1.6;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      .button {
        display: inline-block;
        padding: 10px 50px;
        margin: 10px 0;
        background-color: #0073e6;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        text-align: center;
      }
      .footer {
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1 style="color: #333333">Verification Email</h1>
      <p>Hello ${userData.first_name},</p>
      <p>Please click the button below to verify your email address.</p>
      <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td>
            <a href="${link}" target="_blank" class="button">Verify Email</a>
          </td>
        </tr>
      </table>
      <p>Best Regards,<br />Adelkar Org</p>
      <div class="footer">
        <p>
          To unsubscribe from these emails, please
          <a
            href="${unsubscribeLink}"
            target="_blank"
            style="color: #0073e6; text-decoration: none"
            >click here</a
          >.
        </p>
        <p>Adelkar Org<br />Washington St, Boston, MA 02130</p>
      </div>
    </div>
  </body>
</html>
`,
  };
}
module.exports = verifyEmailTemplate;
