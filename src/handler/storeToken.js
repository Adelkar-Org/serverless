async function storeTokenInDatabase(email, token) {
  const expirationTimestamp = new Date(new Date().getTime() + 2 * 60000); // 2 minutes from now
  // Use your database connection to insert the token
  await db
    .insert({
      email: email,
      token: token,
      expires_at: expirationTimestamp,
    })
    .into("email_verifications");
}
