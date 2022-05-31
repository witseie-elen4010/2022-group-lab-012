function validatePassword() {
  var password = document.getElementById('password').nodeValue

  //minimum length
  if(password.length<8){
    document.getElementById('errMessage').innerHTML = 'Password must be at least 8 characters long'
    return false
  }
}