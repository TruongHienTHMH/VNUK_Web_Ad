var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('<h1>Hello Express Lib</h1>  <hr>')
})

app.listen(3000)