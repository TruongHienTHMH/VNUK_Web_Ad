const Product = require('../models/Product')

exports.getProductsList = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offSet = (page - 1) * 10;

    const sortOrder = req.query.sort === 'desc' ? 'DESC' : 'ASC';

    const { count, rows } = await Product.findAndCountAll(
        {
            limit,
            offSet,
            order: [['name', sortOrder]]
        }
    );
    
    res.render('admin', 
        {
            products: rows,
            currentPage: page,
            totalPage: Math.ceil(count / limit),
            sortOrder
        }   
    );
}

exports.create = async (req, res) => {
    const {name, price, description} = req.body
    const image = req.file ? req.file.fileName : null
    await Product.create({name, price, image, description})
    res.redirect('/admin')
}

exports.edit = async (req, res) => {
    const product = await Product.findByPk(req.params.id) 
    res.render('admin/edit', { product })
}

exports.update = async (req, res) => {
    const { name, price, description } = req.body
    const updateData = { name, price, description }
    if(req.file) {
        updateData.image = req.file.fileName
    }
    await Product.update(updateData, { where: {id: req.params.id} })
    res.redirect('/admin')
}

exports.delete = async (req, res) => {
    await Product.destroy({where: { id: req.params.id }}) 
    res.redirect('/admin')
}


exports.getIdProductToShow = async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    res.render('partials/layouts', {product, content: 'home'})
}

