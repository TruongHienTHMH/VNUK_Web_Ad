const Rectangle = require('../models/rectangle')


exports.showForm = (req, res) => {
    res.render('index', {perimeter: null, area: null})
}

exports.caculatePerimeter = (req, res) => {
    const { width, height } = req.body

    const rectangleObj = new Rectangle(width, height)
    const perimeter = rectangleObj.getPerimeter()
    const area = rectangleObj.getArea()


    res.render('index', { perimeter, area } )
}