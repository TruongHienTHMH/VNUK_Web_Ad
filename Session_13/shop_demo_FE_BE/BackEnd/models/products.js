module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }, 
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'products', // Tên bảng trong DB (nếu bạn muốn là "products")
        timestamps: false
    });
    return Product; 
}