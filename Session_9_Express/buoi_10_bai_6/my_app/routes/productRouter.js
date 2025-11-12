const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/products', productController.getProduct);
router.get('/products/addProduct', productController.showProductForm);
router.post('/products', productController.addProduct);

module.exports = router