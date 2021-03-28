// const todo = require("./todo/todoRouter");
const stepper = require("./stepper/stepperRouter");
const login = require("./login/loginRouter");
const router = require("express").Router();

// router.use("/todos", todo);
router.use("/stepper", stepper);
router.use("/login", login);

module.exports = router;
