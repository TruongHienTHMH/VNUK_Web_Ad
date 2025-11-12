require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { sequelize } = require('./models');
const productRoutesFactory = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve uploads and public
app.use('/uploads', express.static(path.join(process.cwd(), UPLOAD_DIR)));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ensure upload dir exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const base = path.basename(file.originalname, ext).replace(/\s+/g, '-')
        cb(null, `${base}-${Date.now()}${ext}`)
    }
})

const fileFilter = (req, file, cb ) => {
    if(!file.mimetype.startsWith('image/')) {
        return cb(new Error('Chỉ nhận ảnh'), false)
    }

    cb(null,true)
}

const upload = multer({storage, limits: { fileSize: 5 * 1024 * 1024 }, fileFilter})

app.use('/api/products', productRoutesFactory(upload))
app.use((err, req, res, next) => {
  console.error('Lỗi:', err.message);
  res.status(500).json({ error: err.message });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

(async () => {
    try {
        await sequelize.authenticate()
        console.log('✅ Đã kết nối database')
        await sequelize.sync()
        console.log('✅ DB synced')
        app.listen(PORT, () => {
            console.log(`🚀 Server running on: http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error('❌ Không thể sử dụng server: ', err)
    }
})()