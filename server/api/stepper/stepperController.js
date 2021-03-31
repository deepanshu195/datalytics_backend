const { getRoles, getDepartments } = require("./stepperModel");

exports.getRoles = function (req, res, next) {
  getRoles((err, data) => {
    res.json(data);
  });
};

exports.getDepartments = function (req, res, next) {
  getDepartments((err, data) => {
    res.json(data);
  });
};
