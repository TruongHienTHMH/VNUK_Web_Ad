const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, ('public/uploads')),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({ storage })

router.get('/', ProductController.getProductsList);
router.post('/addNewForm', ProductController.create);

router.get('/edit/:id', ProductController.edit);
router.post('/edit/:id', upload.single('image'), ProductController.update);

router.get('/delete:id', ProductController.delete);

router.get('/product', ProductController.getIdProductToShow);


module.exports = router;