const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter');
const Product = require('./models/Product');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/admin', productRouter);

app.get(('/'), (req,res) => {
    res.redirect('/admin');
});

// Tạo 100 sp dump
(
    async () => {
        try {
            await sequelize.sync();
            const countProduct = await Product.count();

            if (countProduct === 0) {
                const dumpData = [];

                for (let i = 0; i < 100; i++) {
                    dumpData.push({
                        name: `Sản phẩm ${i + 1}`,
                        price: Math.floor(Math.random() * 1000),
                        image: 'default.jpeg',
                        description: `Mô tả sản phẩm thứ ${i + 1}`
                    });
                }

                await Product.bulkCreate(dumpData);
                console.log("✅ Đã tạo dump data thành công (100 sản phẩm)");
            }
        } catch (err) {
            console.error("❌ Lỗi khi tạo dữ liệu mẫu:", err);
        }
    }
)();

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'));