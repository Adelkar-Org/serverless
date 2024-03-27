const axios = require("axios");

axios
  .post("http://localhost:8080", {
    data: {
      message: {
        data: Buffer.from(
          JSON.stringify({
            id: "7f35b5ce-7282-446a-9e1e-9d6a98b38c3b",
            account_created: "2024-03-28T08:13:26.512Z",
            account_updated: "2024-03-28T08:13:26.512Z",
            account_verified: false,
            first_name: "mihir",
            last_name: "adelkar",
            email: "mihir.adelkar@gmail.com",
          })
        ).toString("base64"),
      },
    },
  })
  .then((response) => {
    console.log("Function responded with:", response.status);
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error triggering function:", error);
  });
