const crypto = require("crypto");
const sendEmail = require("./sendEmail");
function generateToken(id) {
  // return (token = crypto.randomBytes(8).toString("hex")); //generateToken(id);
  return crypto.randomUUID();
}

function generateVerificationLink(id, token) {
  return `http://adelkar.me:8080/v1/auth/verify?id=${id}&token=${token}`;
}

function extractCloudEventData(cloudEvent) {
  if (!cloudEvent || !cloudEvent.data || !cloudEvent.data.message) {
    console.error("Invalid or incomplete cloud event");
    return false;
  }
  const message = cloudEvent.data.message;
  const data = message.data
    ? JSON.parse(Buffer.from(message.data, "base64").toString())
    : null;
  return data;
}

module.exports = {
  generateVerificationLink,
  generateToken,
  extractCloudEventData,
  sendEmail,
};
