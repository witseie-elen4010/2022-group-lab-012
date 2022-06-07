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

module.exports = {
   fn1: mult,
   fn2: div,
   fn3: Square,
}