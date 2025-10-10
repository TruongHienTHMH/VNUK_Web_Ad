const Rectangle = require('../models/rectangle')


exports.showForm = (req, res) => {
    res.render('index', {resultP: null, resultArea: null})
}

exports.caculatePerimeter = (req, res) => {
    const {width, height} = req.body

    const rectangleObj = new Rectangle(width, height)
    const resultP = rectangleObj.getPerimeter()
    const resultArea = rectangleObj.getArea()


    res.render('index', { resultP, resultArea } )
}