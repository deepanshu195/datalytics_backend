const { createTable, scanWholeTable } = require("../../dbRepository/dal");

var stepperDbSchema = [
  {
    TableName: "roles",
    KeySchema: [
      { AttributeName: "roleName", KeyType: "HASH" }, //Partition key
    ],
    AttributeDefinitions: [{ AttributeName: "roleName", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  },
  {
    TableName: "departments",
    KeySchema: [
      { AttributeName: "deptName", KeyType: "HASH" }, //Partition key
    ],
    AttributeDefinitions: [{ AttributeName: "deptName", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  },
];

(function bootStrapDB() {
  createTable(stepperDbSchema);
})();

exports.getRoles = function (callback) {
  let params = {
    TableName: "roles",
    ProjectionExpression: "roleName",
  };

  scanWholeTable(params, callback);
};

exports.getDepartments = function (callback) {
  let params = {
    TableName: "departments",
    ProjectionExpression: "deptName",
  };

  scanWholeTable(params, callback);
};
