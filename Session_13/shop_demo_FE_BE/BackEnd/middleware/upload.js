const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const uploadDir = path.join(__dirname, '..', process.env.UPLOAD_DIR || 'public/uploads');
// Kiểm tra thư mục có tồn tại không? 
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, {recursive: true});
}

// Cấu hình đĩa vật lý - kết nối
const storage = multer.diskStorage({
    // xác định ổ đĩa, cb === CallBack
    destination: (req, file, cb) => cb(null, uploadDir),
    // Đăt tên = cách lấy tên file - thời gian tạo và đuôi file
    filename: (req,res, cd) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}${ext}`);
    }
})

const upload = multer({storage})
module.exports = upload;