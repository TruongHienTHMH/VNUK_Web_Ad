const express =require('express')
const app = express();

const path = require('path')
const sequelize = require('./config/database')
const RectangleRouter = require('./routes/rectangleRouter');
const { error } = require('console');
const e = require('express');
require('dotenv').config()

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.set('view engine', 'ejs')

app.use('/', RectangleRouter)


sequelize.sync().then(() => {
    console.log('Đã kết nối với Database')
    app.listen(process.env.PORT || 3000, () => {
        console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    })
}).catch((err) => {
    console.log('Lỗi:   ' + err)
}) 
