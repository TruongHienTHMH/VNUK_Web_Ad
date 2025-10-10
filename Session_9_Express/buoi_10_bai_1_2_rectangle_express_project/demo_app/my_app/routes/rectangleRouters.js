const express = require('express')
const router = express.Router()
const rectangleController = require('../controllers/rectangleController')

router.get('/cal', rectangleController.caculatePerimeter)
router.post('/cal', rectangleController.caculatePerimeter)

module.exports = router