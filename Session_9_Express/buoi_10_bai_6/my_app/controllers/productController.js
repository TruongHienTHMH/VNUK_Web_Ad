const Product = require('../models/product');

const productController = {
    getProduct: (req, res) => {
        Product.getAllProducts((err, products) => {
            if(err) {
                return res.status(500).json({error: 'Báo lỗi data từ Controller'})
            } 
            return res.render('products', {products})
        })
    },

    showProductForm: (req, res) => {
        return res.render('addProducts')
    },
    
    addProduct: (req, res) => {
        const { name, price, description } = req.body
        const productData = { name, price, description }
        console.log(req.body);

        if(!name || !price || !description){
            // console.error(err);
            return res.status(400).json({err: 'Ô thông tin bị bỏ trống'})
        } 

        Product.createProduct(productData, (err) => {
            if(err) {
                return res.status(500).json({error: 'Không thể thêm sản phẩm mới'})
            } 
            return res.redirect('/api/products')
        })
    }
}

module.exports = productController