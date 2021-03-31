const axios = require("axios");
const config = require("../../config/config");

exports.getGithubCreds = function (req, res) {
  axios
    .post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: config.github_Cred.Client_ID,
        client_secret: config.github_Cred.Client_Secret,
        code: req.params.code,
        redirect_uri: "",
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      axios
        .get("https://api.github.com/user", {
          headers: {
            Authorization: "token " + response.data.access_token,
          },
        })
        .then((user) => {
          res.send(user.data);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
