const functions = require("@google-cloud/functions-framework");
const verifyEmail = require("./src/controller/verifyEmail.controller");

functions.cloudEvent("verifyEmail", verifyEmail);
