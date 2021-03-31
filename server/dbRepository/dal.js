const config = require("../config/config");
const sampleData = require("./seedData");

exports.scanWholeTable = function (params, callback) {
  let dynamoClient = dynamoDbFactory.getClientInstance();
  let items = [];
  var scanExecute = function (callback) {
    dynamoClient.scan(params, function (err, result) {
      if (err) {
        callback(err);
      } else {
        items = items.concat(result.Items);
        if (result.LastEvaluatedKey) {
          params.ExclusiveStartKey = result.LastEvaluatedKey;
          scanExecute(callback);
        } else {
          callback(err, items);
        }
      }
    });
  };
  scanExecute(callback);
};

exports.createTable = function (dbSchema) {
  dbSchema.forEach((params) => {
    let dbInstance = dynamoDbFactory.getDbInstance();
    dbInstance.describeTable({ TableName: params.TableName }, (err, data) => {
      if (err) {
        dbInstance.createTable(params, function (err, data) {
          if (err) {
            console.error(
              "Unable to create table. Error JSON:",
              JSON.stringify(err, null, 2)
            );
          } else {
            if (config.env === "development") {
              seedData(
                params.TableName,
                sampleData.stepperSeedData[params.TableName]
              );
            }
          }
        });
      }
    });
  });
};

function seedData(tableName, items) {
  items.forEach((item) => {
    let params = {
      TableName: tableName,
      Item: item,
    };
    console.log(params);
    let dynamoClient = dynamoDbFactory.getClientInstance();
    dynamoClient.put(params, (err, data) => {
      if (err) {
        console.error(
          "Unable to add data",
          ". Error JSON:",
          JSON.stringify(err, null, 2)
        );
      }
    });
  });
}
