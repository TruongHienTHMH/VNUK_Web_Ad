const Square = require('../models/square')

exports.showForm = (req, res) => {
    res.render('index', {perimeter: null, area: null})
}

exports.calculateForm = async (req, res) => {
    try{
        const sideLength = Number(req.body.sideLength);

        if(isNaN(sideLength)){
            return res.status(400).send('Chiều dài không phải số')
        }

        const perimeter = sideLength * 4
        const area = sideLength * sideLength

        console.log('Đã nhận perimeter là: ' + perimeter);

        const square = new Square({sideLength, perimeter, area})

        await square.save()

        res.render('index',{perimeter, area})
    } catch (err) {
        console.log('Báo lỗi từ code Controllers: ' + err)
    }
}