
var express = require('express');
const path = require('path');
var router = express.Router();

const controller = require('../server/controller')

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

// Database API
router.post('/login', controller.signup)
router.get('/login', controller.signin)
router.post('/login/:id', controller.delete)

module.exports = router;