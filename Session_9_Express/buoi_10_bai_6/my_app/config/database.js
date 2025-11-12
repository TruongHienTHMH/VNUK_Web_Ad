const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vnuk_web_ad'
})

connection.connect((err) => {
    if(err){
        throw err;
    } 
    console.log('Đã kết nối database thành công');
})

module.exports = connection;