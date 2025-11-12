const {DataTypes} = require('sequelize'); // Tạo 1 đối tượng sau và sử dụng thư viện sequelize
const sequelize = require('../config/database');

const Rectangle = sequelize.define('RectangleModel', {
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    lenght: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    area: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    perimeter: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, 
{
    tableName: 'rectangles',
    timestamps: true
})

module.exports = Rectangle