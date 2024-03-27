const EmailTracker = require("../model/emailTracker.model");

async function saveVerifyEmailData(userData, token, msg) {
  try {
    const emailData = {
      email: userData.email,
      token: token,
      userId: userData.id,
      status: msg.status,
      messageData: JSON.stringify(msg),
    };
    const emailTracker = await EmailTracker.create(emailData);
    if (!emailTracker) throw new Error("Error saving email data");
    console.log(
      "Email saved successfully",
      emailTracker.email,
      emailTracker.status
    );
  } catch (error) {
    console.error("Error saving email data:", error);
  }
}

module.exports = saveVerifyEmailData;
