const Square = require('../models/square')

exports.showForm = (req, res) => {
    res.render('squareIndex', {resultP: null, resultArea: null})
}

exports.calculateSquare = (req, res) => {
    const {sideLength} = req.body
    const squareObj = new Square(Number(sideLength))
    const resultP = squareObj.getPerimeter()
    const resultArea = squareObj.getArea()

    res.render('squareIndex', { resultP, resultArea })
}