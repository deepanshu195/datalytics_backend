const express = require("express");
const config = require("./config/config");
const cors = require("cors");

const api = require("./api/api");
var app = express();

// require("mongoose").connect(config.db.url, {
//   useNewUrlParser: true,
// });

// Adding Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", api);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("Invalid token");
    return;
  }

  console.log(err.stack);
  res.status(500).send("Oops");
});

module.exports = app;
