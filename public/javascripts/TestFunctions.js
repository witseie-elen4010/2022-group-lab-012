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
module.exports = {
   fn1: mult,
   fn2: div,
   fn3: Square,
   fn4: isUser,
   fn5: isPassword,
   fn6: userExist,
   fn7: passwordCase,
   fn8: passwordCorrect
}