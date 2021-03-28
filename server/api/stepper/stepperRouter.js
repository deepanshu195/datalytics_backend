const router = require("express").Router();
const controller = require("./stepperController");

router.route("/roles").get(controller.getRoles);
router.route("/departments").get(controller.getDepartments);

module.exports = router;
