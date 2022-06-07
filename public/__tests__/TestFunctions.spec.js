'use strict'

const CreatedModule = require('../javascripts/TestFunctions.js')
 /* eslint-env jest */
const mult= CreatedModule.fn1
const div = CreatedModule.fn2
const square = CreatedModule.fn3

describe("Multiplication , Division and Sqaure Functions",()=>{

    
    test('Multiplication of 10*10 equals 100',()=>{
        const a =10, b =10 ,result =100
        expect(mult(a,b)).toBe(result)
    })
    
    test('Sqaure of 9 equals 81',()=>{
        const a =9,result =81
        expect(square(a)).toBe(result)
    })
    
    test('100 divided by 10 equals 10',()=>{
        const a =100, b =10 ,result =10
        expect(div(a,b)).toBe(result)
    })
    
})
    