var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/play', indexRouter);
app.use('/createAcc', indexRouter);
app.use('/newAcc', indexRouter);
app.use('/instructions', indexRouter);

module.exports = app;
app.listen(process.env.PORT || 8000)
console.log('Express server running on port 3000',process.env.PORT || 8000)

