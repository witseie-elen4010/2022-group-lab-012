'use strict'
var axios = require("axios").default;
const mongoose = require('mongoose');
const {model,Schema} = require('mongoose');
var cors = require("cors")
const express = require('express');
const http = require('http')
const socketio = require('socket.io')
var path = require('path');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb+srv://SpaceWordle:spacEworDle22@cluster0.ctu0b.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({
 //   extended: true
//}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/play', indexRouter);
app.use('/createAcc', indexRouter);
app.use('/newAcc', indexRouter);
app.use('/instructions', indexRouter);
app.use('/PlaySingleTimed',indexRouter)
app.use('/Share',indexRouter);
app.use('/lobby',indexRouter)
app.use('/signup', indexRouter);
app.use('/signin', indexRouter);
app.use('/login', indexRouter);


 let userSchema = new mongoose.Schema({
    username: String,
    password: String
});

let User = mongoose.model("player", userSchema);

 let gameModeSchema = new mongoose.Schema({
    Mode: String,
    User: { type: Schema.Types.ObjectId, ref: 'User'}
 })

 
let GameMode = mongoose.model('GameMode', gameModeSchema);


GameMode.create( {}, function(err, user){
    if(err){
       console.log(err); 
    } else {
        console.log("NEWLY LOGGED IN USER: ");
        console.log(user);
    }
  })


//Getting username and password
app.post("/createAcc", (req, res)=>{
    
    let username = (req.body.username);
    let password = (req.body.password);
    let newUser = {
     "username" : username,
     "password" : password
    }
    
    User.create(newUser, function(err, user){
            if(err){
               console.log(err); 
            } else {
                console.log("NEWLY LOGGED IN USER: ");
                console.log(user);
            }
        }
   ) ;

          return res.redirect("/newAcc")  

});


//db.collection('users').insertOne(,(err,collection)=>{
  //  if(err){
    //   throw err 
    //}   
    //console.log("User inserted succesfully:");
//});

//Refracting router handler
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/play.html')
})
// Generate Wordle word
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
        res.json(response.data[0])
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
        console.log(response.data)
        res.json(response.data.result_msg)
    }).catch(function (error) {
        console.error(error)
    })
})

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) =>{
    console.log('connected')
    socket.on('turn', (click) => io.emit('turn', click))
    socket.on('feedback', (colour_change) => io.emit('feedback', colour_change))

    socket.on('FromGameMode',function(data){
       console.log('Recieved Data from client')
    }) 
    
})

server.on('error', (err) => {
    console.error(err)
})


app.listen(8080)
console.log('Express server running on port 8080')
