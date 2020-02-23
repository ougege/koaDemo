const Sequelize = require('sequelize')
const user = {dbName: 'koa', dbUserName: 'koa', password: 'koa'}
const sequelize = new Sequelize(user.dbName, user.dbUserName, user.password, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        // 字符集
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+8:00' // 东八区
});
module.exports = {sequelize}