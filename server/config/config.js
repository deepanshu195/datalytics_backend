const _ = require("lodash");

var config = {
  dev: "development",
  test: "test",
  production: "production",

  port: process.env.PORT || 4000,
  expireTime: 24 * 60,
  secrets: {
    jwt: process.env.JWT || "gumball",
  },
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;

try {
  envConfig = require("./" + config.env);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);
