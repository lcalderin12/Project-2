
//When using "use strict","development" and "test" value variables have to
//be put in quotes in order to read from .env (just like "JAWSDB_URL")
//"use strict";
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.PORT_TWO,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT_TWO,
    "dialect": "mysql"
  },
  //variable only works with quotes whether "use strict" is being used or not
  "production": {
    "JawsDB": "JawsDB_URL",
    "dialect": "mysql"
  }
};

