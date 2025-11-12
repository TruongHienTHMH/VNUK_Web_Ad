const express = require('express')
const RectangleController = require('../controllers/RectangleController')
const router = express.Router()

router.get('/', RectangleController.getForm)
router.post('/calculateForm', RectangleController.calAction)
router.get('/list_rectangle', RectangleController.getList)

module.exports = router