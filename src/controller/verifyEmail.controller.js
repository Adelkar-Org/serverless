const verifyEmailTemplate = require("../template/verifyEmail");
const {
  saveInitialEmailData,
  updateEmailDataAfterSending,
} = require("../service/emailTracker.service");
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
    const link = generateVerificationLink(userData.id, token);
    const emailData = verifyEmailTemplate(userData, link);
    if (!emailData) throw new Error("Error generating email data");
    const emailTracker = await saveInitialEmailData(userData, token);
    const msg = await sendEmail(emailData, userData.email);
    await updateEmailDataAfterSending(emailTracker.id, msg);
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = verifyEmail;
