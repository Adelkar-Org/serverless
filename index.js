const functions = require("@google-cloud/functions-framework");
const sendEmail = require("./src/util/sendMail");

functions.cloudEvent("verifyEmail", (cloudEvent) => {
  const message = cloudEvent.data.message;
  const userData = message.data
    ? JSON.parse(Buffer.from(message.data, "base64").toString())
    : null;
  console.log("userData", userData);
  if (!userData || !userData.email) {
    console.error("Invalid user data or missing information");
    return;
  }
  sendEmail(userData);
});
