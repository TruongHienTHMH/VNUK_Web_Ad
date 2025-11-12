const db = require('../config/database');

const Product = {
    getAllProducts: (callback) => {
        db.query(`SELECT * FROM product`, (err, result) => {
            if(err) {
                return callback(err,null);
            } 
            return callback(null, result);
        })
    },

    createProduct: ( productData , callback) => {
        db.query(`INSERT INTO product (name, price, description) VALUES(?, ?, ?)`,
            [productData.name, productData.price, productData.description],
            (err, result) => {
                if(err) {
                    return callback(err, null)
                } 
                return callback(null, result)
            }
        )
    }
}

module.exports = Product