
var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SPACEWORDLE' });
});

//get form page
router.get('/createAcc', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','account.html'))
});

/* GET welcome page. */
//add the welcome page to public
router.get('/newAcc', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','welcome.html'))
});

//get grid and keyboard
router.get('/play', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public','play.html'))
});

module.exports = router;