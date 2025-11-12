const { Sequelize } = require('sequelize'); // Đang khai báo đối tượng Sequelize

const sequelize = new Sequelize('vnuk_web_ad', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
.then(() => {
    console.log("Kết nối thành công database!!!")
})
.catch((err) => {
    console.log("XXX Không thể kết nối XXX" + err)
});

module.exports = sequelize;