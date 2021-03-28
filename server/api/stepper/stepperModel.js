var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var roleSchema = new Schema({
  roleName: {
    type: String,
    required: true,
  },
});

var departmentSchema = new Schema({
  departmentName: {
    type: String,
    required: true,
  },
});

exports.departmentModel = mongoose.model("department", departmentSchema);
exports.roleModel = mongoose.model("role", roleSchema);
