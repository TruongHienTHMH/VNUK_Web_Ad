const Rectangle = require('../models/rectangle');

exports.getForm = (req, res) => {
    return res.render('index');
}

exports.calAction = async (req, res) => {
    const {width, lenght} = req.body;

    const area = (parseFloat(width) * parseFloat(lenght))
    const perimeter = (parseFloat(width) + parseFloat(lenght)) * 2

    await Rectangle.create({width, lenght, perimeter, area});

    res.redirect('/list_rectangle')
}

exports.getList = async (req, res) => {
    const data_rectangle = await Rectangle.findAll({ order: [['id' , 'desc']] })
    res.render('list', { data_rectangle })
}