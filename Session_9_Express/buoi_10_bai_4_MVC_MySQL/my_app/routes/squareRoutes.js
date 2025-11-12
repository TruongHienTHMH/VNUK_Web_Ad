const express = require('express');
const router = express.Router();
const squareController = require('../controller/squareController')

router.get('/', squareController.showForm);
router.post('/calculate', squareController.calculateForm);

module.exports = router