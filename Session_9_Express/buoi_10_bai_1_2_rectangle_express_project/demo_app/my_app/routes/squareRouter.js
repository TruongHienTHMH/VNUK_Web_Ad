const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');

router.get('/squareForm', squareController.showForm);
router.post('/squareCal', squareController.calculateSquare);

module.exports = router