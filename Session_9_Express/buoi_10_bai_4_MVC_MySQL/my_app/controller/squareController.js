const squareModel = require('../models/square');

exports.showForm = (req, res) => {
    res.render('index', {perimeter: null, area: null});
}

exports.calculateForm = async (req, res) => {
    try {
        let sideLength = Number(req.body.sideLength); // sideLength trong này là name, tên của ô input

        let perimeter = sideLength * 4;
        let area = sideLength * sideLength;

        await squareModel.saveSquareData(sideLength, perimeter, area);
        res.render('index', {perimeter, area});
    } catch (error) {
        console.error('Báo lỗi từ squareController');
        console.error(error);
        res.status(500).send('Server Error');
    }
}
