var axios = require("axios").default
var cors = require("cors")
var express = require('express');
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var playRouter = require('./routes/play');

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
app.use('/PlaySingleTimed',indexRouter)
app.use('/PlaySingleUntimed',indexRouter);

// word generatine API
app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: { count: '1', wordLength: '5' },
        headers: {
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    }

    axios.request(options).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

//Word checker API
app.get('/check', (req, res) => {
    const word = req.query.word
    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry: word },
        headers: {
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    }

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data.result_msg)
    }).catch(function (error) {
        console.error(error);
    })
})

module.exports = app;


app.listen(3000)
console.log('Express server running on port 3000')



app.use('/createAcc', indexRouter);
app.use('/newAcc', indexRouter);
app.use('/play', playRouter);


module.exports = app;
app.listen(3000)
console.log('Express server running on port 3000')


