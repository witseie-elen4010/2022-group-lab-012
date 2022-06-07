
var express = require('express');
const path = require('path');
var router = express.Router();

const controller = require('../server/controller')
var mongoose = require('mongoose')
var DB = mongoose.connection;

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SPACEWORDLE' });
});

//get form page
router.get('/createAcc', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','account.html'))
});

//add the welcome page to public
router.get('/newAcc', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','welcome.html'))
});

//get grid and keyboard
router.get('/play', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','play.html'))
});


//get instructions page
router.get('/instructions', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','/instructions.html'))
});


//get grid and keyboard page
router.get('/PlaySingleTimed', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','play.html'))
});

//get grid and keyboard page
router.get('/PlaySingleUntimed', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','playUntimed.html'))
});

//get shareable link
router.get('/Share', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','share.html'))
});

//get lobby page
router.get('/lobby', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','Lobby.html'))
});

//get sigin page
router.get('/signin', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','signin.html'))
});

//get sigup page
router.get('/signup', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','signup.html'))
});

var usersDb = require('../server/model')

// Database API
router.post('/login', function(req, res, next){
    // Request validation
    if(!req.body){
      res.status(400).send({message: 'Form cannot be empty'})
      return
    }
  
    //create new player object
    const player = new usersDb({
      username:req.body.username,
      password:req.body.password
    })
  
    //add new player object to the database
    player
      .save(player)
      .then(data=>{
        res.redirect("/newAcc")
      })
      .catch(err=>{
        res.status(500).send({
          message: err.message || 'Error occcured while adding new player'
        })
      })
})
router.get('/login', function(req, res, next){
  // Request validation
  if(!req.body){
    res.status(400).send({message: 'Form cannot be empty'})
    return
  }
  
  //check if the account exists in the database
  if(usersDb.find(
    {username:req.body.username},
    {password:req.body.password}
  )){
    res.redirect("/newAcc")
  }
  else{
    res.status(500).redirect("/signup")
  }

})

router.post('/login', controller.delete)

module.exports = router;