var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set up cho Rectangle (Body-Parser cho form and Route)
const bodyParser = require('body-parser')
const rectangleRouters = require('./routes/rectangleRouters')
const squareRouter = require('./routes/squareRouter')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const PORT = process.env.PORT || 3000 // Set up PORT

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');
app.set('views', './views')


app.use(logger('dev'));


// Middleware cho Bodyparser
app.use(bodyParser.urlencoded({extended: true}))


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Route cho cal
app.use('/', rectangleRouters)
app.use('/', squareRouter)

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
