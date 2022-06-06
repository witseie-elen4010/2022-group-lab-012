const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

//Define shape and content of the users database
var userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
})

const usersDb = mongoose.model('usersdb',userSchema)
module.exports = usersDb