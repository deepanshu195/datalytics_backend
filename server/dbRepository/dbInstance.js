var AWS = require("aws-sdk");
const config = require("../config/config");

global.dynamoDbFactory = (function () {
  var dynamoDb;
  var dynamoClient;

  function createDbInstance() {
    var object = new AWS.DynamoDB(config.db.dynamoConfig);
    return object;
  }

  function createClientInstance() {
    var object = new AWS.DynamoDB.DocumentClient(config.db.dynamoConfig);
    return object;
  }

  return {
    getDbInstance: function () {
      if (!dynamoDb) {
        dynamoDb = createDbInstance();
      }
      return dynamoDb;
    },
    getClientInstance: function () {
      if (!dynamoClient) {
        dynamoClient = createClientInstance();
      }
      return dynamoClient;
    },
  };
})();
