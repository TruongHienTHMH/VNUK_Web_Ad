const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const crtl = require('../controller/ProductController');

router.get('/', crtl.list);
router.get('/:id', crtl.get);
router.post('/', upload.single('image'), crtl.create);
router.put('/:id', upload.single('image'), crtl.update);
router.delete('/:id', crtl.destroy);

module.exports = router;