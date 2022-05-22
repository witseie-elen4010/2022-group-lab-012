var axios = require("axios").default
var cors = require("cors")
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors())
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

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: { count: '1', wordLength: '5' },
        headers: {
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
            'X-RapidAPI-Key': '53168676e6mshb88fe001b3eaebap19ee34jsnec49acaf3ae2'
        }
    }

    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })
})


module.exports = app;
app.listen(process.env.PORT || 8000)
console.log('Express server running on port 3000',process.env.PORT || 8000)

