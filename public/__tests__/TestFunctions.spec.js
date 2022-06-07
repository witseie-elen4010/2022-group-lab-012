'use strict'

const CreatedModule = require('../javascripts/TestFunctions.js')
 /* eslint-env jest */
const mult= CreatedModule.fn1
const div = CreatedModule.fn2
const square = CreatedModule.fn3
const isUser = CreatedModule.fn4
const isPassword = CreatedModule.fn5
const userExists = CreatedModule.fn6

describe("Sqaure , Division and Sqaure Functions",()=>{

    
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
    
describe('Unique username validation', () => {
    test('entered username', () => {
      const username = 'Chavi'
      const result = true
      expect(isUser(username)).toBe(result)
    })
  
    test('did not enter username', () => {
      const username = ''
      const result = false
      expect(isUser(username)).toBe(result)
    })

    test('Entered a username that already exists', () => {
        const username = 'Chavi'
        const result = true
        userExists(username)
        expect(userExists(username)).toBe(result)
      })
  })