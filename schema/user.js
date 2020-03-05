const moment = require('moment')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        }
    }, {
        freezeTableName: true
    })
}