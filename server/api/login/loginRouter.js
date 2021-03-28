const router = require("express").Router();
const controller = require("./loginController");

router.route("/code/:code").get(controller.getGithubCreds);

module.exports = router;
