var usersDb = require('../server/model')

// Signup for new account
exports.signup = (res,req)=>{
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
      res.send(data)
    })
    .catch(err=>{
      res.status(500).send({
        message: err.message || 'Error occcured while adding new player'
      })
    })

}
// Sign in to existing account
exports.signin = (res,req)=>{
  
}
// Delete existing account
exports.delete = (res,req)=>{
  
}