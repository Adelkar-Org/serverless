const EmailTracker = require("../model/emailTracker.model");

async function saveInitialEmailData(userData, token) {
  try {
    if (!userData || !token) throw new Error("Invalid initial data");

    const emailData = {
      email: userData.email,
      token: token,
      userId: userData.id,
    };

    const emailTracker = await EmailTracker.create(emailData);
    if (!emailTracker) throw new Error("Error saving initial email data");

    console.log("Initial email data saved successfully", emailTracker.email);
    return emailTracker; // Returning this might be useful for further operations
  } catch (error) {
    console.error("Error saving initial email data:", error);
    throw error;
  }
}

async function updateEmailDataAfterSending(id, msg) {
  try {
    if (!id || !msg) throw new Error("Invalid data for updating");

    // Assuming `emailId` is the identifier of the email data record to update
    const updatedEmailData = {
      status: msg.status,
      messageData: JSON.stringify(msg),
    };

    const emailTracker = await EmailTracker.update(updatedEmailData, {
      where: { id },
    });

    if (!emailTracker) throw new Error("Error updating email data");

    console.log("Email data updated successfully", id, msg.status);
  } catch (error) {
    console.error("Error updating email data:", error);
    throw error;
  }
}

module.exports = { saveInitialEmailData, updateEmailDataAfterSending };
