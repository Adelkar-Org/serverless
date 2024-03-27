const verifyEmailTemplate = require("../template/verifyEmail");
const saveVerifyEmailData = require("../service/emailTracker.service");
const {
  generateToken,
  generateVerificationLink,
  sendEmail,
  extractCloudEventData,
} = require("../util");

async function verifyEmail(cloudEvent) {
  try {
    // Extract user data from the cloud event
    const userData = extractCloudEventData(cloudEvent);
    if (!userData || !userData.email || !userData.id)
      throw new Error("Invalid user data or missing information");
    console.log(`Sending email to ${userData.email}`);

    // check if user account is already verified
    if (userData.account_verified)
      throw new Error("User account already verified");

    // generate token a random uuid token
    const token = generateToken(userData.id);
    if (!token) throw new Error("Error generating token");

    // generate verification link
    const link = generateVerificationLink(userData.id, token);
    if (!link) throw new Error("Error generating verification link");

    // compile email data
    const emailData = verifyEmailTemplate(userData, link);
    if (!emailData) throw new Error("Error generating email data");

    // send verification email
    const msg = await sendEmail(emailData, userData.email);
    if (!msg) throw new Error("Error sending email");

    // save email data and token to db
    await saveVerifyEmailData(userData, token, msg);
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = verifyEmail;
