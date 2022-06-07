'use strict'
/* eslint-env jest */
function mult(a,b)
{
    return a*b
}

function div(a,b)
{
    return a/b
}

function Square(a)
{
    return a*a 
}


function isUser(name){
    if(name.length>0){return true}
    else{return false}
}
var n =0
function userExist(name){
    n++
    const player = name
    if(n>1 && player.length!=0){return true}
    else{return false}
}
function isPassword(pswrd){
    if(pswrd.length>0){return true}
    else{return false}
}

function passwordCase(pswrd,paswrd){
    if(pswrd!=paswrd){return true}
    else{return false}
}

function passwordCorrect(pswrd,paswrd){
    if(pswrd==paswrd){return true}
    else{return false}
}
let seconds =0
let minutes =0
let hours =0
function STOPWATCH() {
    seconds++
    // Update minutes and hours
    if (seconds / 60 === 1) {
      seconds = 0
      minutes++
  
      if (minutes / 60 === 1) {
        minutes = 0
        hours++
      }
    }

    return {seconds,minutes,hours}
}



const row_checker = (input_word, API_word, is_game_over, current_row, current_square) => {
                
  
   if (input_word == API_word) {
           let message = 'Awesome!'
           return message          
       } 

                
   else {
         if (current_row >= 5) {
          is_game_over = true
          let message = API_word
          return {message, is_game_over}
        }
                     
   else if (current_row < 5 && current_square === 5) {

         current_row++      
         return current_row
         }
                
        }
}




module.exports = {
   fn1: mult,
   fn2: div,
   fn3: Square,
   fn9: isUser,
   fn10: isPassword,
   fn6: userExist,
   fn7: passwordCase,
   fn8: passwordCorrect,
   fn4: STOPWATCH,
   fn5: row_checker

}



