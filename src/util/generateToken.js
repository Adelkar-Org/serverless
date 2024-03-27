const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();
// function generateVerificationToken() {
//   return crypto.randomBytes(20).toString("hex");
// }

function generateToken(email) {
  // const expirationTime = Math.floor(Date.now() / 1000) + 120; // Expires in 2 minutes
  // const token = `${email}:${expirationTime}`;
  // return crypto
  //   .createHmac("sha256", process.env.TOKEN_SECRET)
  //   .update(token)
  //   .digest("hex");
  // just generate a uuid for now
  return crypto.randomBytes(16).toString("hex");
}

function generateVerificationLink(email) {
  const token = generateToken(email);
  return `http://adelkar.me:8080/v1/auth/verify?token=${token}&email=${encodeURIComponent(
    email
  )}`;
}

module.exports = generateVerificationLink;
