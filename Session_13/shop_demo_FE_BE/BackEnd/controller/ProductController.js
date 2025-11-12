const { Product } = require('../models');

module.exports = {
    async list(req, res) {
        try {
            const products = await Product.findAll({ order: [['id', 'DESC']] });
            res.json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Lỗi server khi lấy danh sách sản phẩm" });
        }
    },

    async get(req, res) {
        const product = await Product.findByPK(req.params.id);
        if(!product){
            res.status(404).json({message: "Không tồn tại sản phẩm !!! <Get>"});
        } 
        res.json(product);
    },

    async create(req, res) {
        const { name, price, description } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        const product = await Product.create({name, price, description, image});
        res.status(201).json(product)
    },
    
    async update(req, res) {
        const {name, price, description} = req.body;
        const p = await Product.findByPK(req.params.id);
        if(!p){
            res.status(404).json({message: "Không tìm thấy sản phẩm !!!"});
        }

        if(req.file){
            p.image = `/uploads/${req.file.filename}`;
        }
        p.name = name;
        p.price = price;
        p.description = description;

        await p.save();
        res.json(p);
    }, 

    async destroy(req, res){
        const p = await Product.findByPK(req.params.id);
        if(!p) {
            return res.status(404).json({message: "Not Found"})
        }
        await p.destroy();
        res.json({message: 'Đã xoá thành công!!!'});
    }

}