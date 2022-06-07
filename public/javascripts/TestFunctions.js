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

module.exports = {
   fn1: mult,
   fn2: div,
   fn3: Square,
   fn4: STOPWATCH
}