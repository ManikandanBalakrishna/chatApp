const Sequalize = require('sequelize');

const sequelize = new Sequalize('chatUsers','sa','mani@123',//process.env.DB_NAME,process.env.USERNAME,process.env.PASSWORD,
  {
    dialect: 'mssql',
    //host: process.env.SQL_URI,
    host:'localhost',
    define:{
      freezeTableName:true
    },
    dialectOptions: {
      
      options: {
        connectTimeout: 300000,
        requestTimeout: 300000,
        cancelTimeout: 300000
      }
    },
    pool: {
      max: 100,
      min: 0,
      acquire: 100 * 1000,
      idle: 900000,
      maxIdleTime: 120000
    },
  });


module.exports = sequelize;

