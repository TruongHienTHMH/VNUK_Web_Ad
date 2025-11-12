const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Tạo bảng products và cho bảng này thành Model Product
const Product = sequelize.define('Product', 
    // Khai báo các trường trong bảng
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: 'default.png'
        },
        desciption: {
            type: DataTypes.TEXT
        }
    },
    // Khai báo tên cho bảng
    {
        tableName: 'products',
        timestamps: true
    } 
);

module.exports = Product;