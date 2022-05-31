function validateForm() {
  var allLetters = /^[a-zA-Z]+$/;
  var letters = /[a-zA-Z]/;
  var number = /[0-9]/;
  var invalid = []
  var err = 0
  var username = document.newAcc.username.value
  var password = document.newAcc.password.value
  
  if(!allLetters.test(username)){
    invalid.push('Enter valid username')
    err++}
  if(password.length<8 || !number.test(password)||!letters.test(password)){
    invalid.push('Enter valid password with atleast a number and a letter. Password must be 8 characters long')
    err++}

  document.getElementById('errMessage').innerHTML =invalid
  if(err!=0){return false}
  else return true

  //minimum length
 // if(password.length<8){
  //  document.getElementById('errMessage').innerHTML = 'Password must be at //least 8 characters long'
  //  return false
 // }
}
