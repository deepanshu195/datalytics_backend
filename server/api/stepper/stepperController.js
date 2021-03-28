const { roleModel, departmentModel } = require("./stepperModel");

exports.getRoles = function (req, res, next) {
  roleModel.find({}).then(
    function (result) {
      res.json(result);
    },
    function (err) {
      next(err);
    }
  );
};

exports.getDepartments = function (req, res, next) {
  departmentModel.find({}).then(
    function (result) {
      res.json(result);
    },
    function (err) {
      next(err);
    }
  );
};
