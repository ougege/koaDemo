const moment = require('moment')
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('forward', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field:'name'
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id'
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'price'
        },
        deposit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'deposit'
        },
        uuid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        }
    }, {
        freezeTableName: true
    })
}