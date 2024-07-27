var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require("./config/connection").db;
console.log(config);
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false,
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    pool: {
      max: 15,
      min: 0,
      acquire: 600000,
      idle: 10000,
    },
    dialectOptions: {
      connectTimeout: 600000
    }
  }
);
var db = {};

// Export all modal in the current directory

fs.readdirSync(path.join(__dirname, 'tables'))
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    var model = require(path.join(__dirname, 'tables', file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });


Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

console.log({ sequelize });
sequelize.sync({});


db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
