const Product = require('../models/product')

const productController = {
    getProducts: (req, res) => {
        Product.getAllProducts((err, products) => {
            if(err) {
                return res.status(500).json({error: "DB Bị lỗi, báo từ controllers"})
            }
            return res.render('products', {products})
        })
    },
}

module.exports = productController