

"use strict";
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV ;
const config = require(__dirname + "/../config/config.js")[env];
const db = {};


console.log("NODE_ENV: "+ process.env.NODE_ENV);


let sequelize;
if (env=="production") {
  sequelize = new Sequelize(process.env[config.JawsDB], config);
  console.log("Sequelize running in NODE_ENV: "+ process.env.NODE_ENV);
} else if (env=="development"||"test"){
  sequelize = new Sequelize(process.env[config.database], process.env[config.username], process.env[config.password], config);
  console.log("Sequelize running in NODE_ENV: "+ process.env.NODE_ENV);
}else {
  console.log("PLEASE CHOOSE AN ENVIRONMENT...");
}
// sequelize = new Sequelize({
//     dialect: "mysql",
//     database: 'recipe_db',
//     user: 'root',
//     password: 'password',
//     host: 'localhost'
//   });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;