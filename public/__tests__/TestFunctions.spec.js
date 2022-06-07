'use strict'
 /* eslint-env jest */
const CreatedModule = require('../javascripts/TestFunctions.js')
const mult= CreatedModule.fn1
const div = CreatedModule.fn2
const square = CreatedModule.fn3
const STOPWATCH = CreatedModule.fn4
const row_checker = CreatedModule.fn5

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

describe("Update seconds , minutes and hours stopwatch starts",()=>{
    test('Update seconds',()=>{

          for (let i=0; i<13; i++)
          {  
              STOPWATCH() 
          };
           let object = STOPWATCH()
      expect(STOPWATCH(object)).toStrictEqual({"hours": 0, "minutes": 0, "seconds": 15})
    })

    test('Update minutes',()=>{

        for (let i=0; i<150; i++)
        {  
            STOPWATCH() 
        };
         let object = STOPWATCH()
    expect(STOPWATCH(object)).toStrictEqual({"hours": 0, "minutes": 2, "seconds": 47})
  })

  test('Update hours',()=>{

    for (let i=0; i<3600; i++)
    {  
        STOPWATCH() 
    };
     let object = STOPWATCH()
expect(STOPWATCH(object)).toStrictEqual({"hours": 1, "minutes": 2, "seconds": 49})

})

})



describe("Testing row_checker function",()=>{

    
    test('Correct word guessed',()=>{
        let input_word = 'WATER'
        let API_word = 'WATER'
        expect(row_checker(input_word, API_word)).toStrictEqual('Awesome!')
    })
    test('When guesses are exhausted return correct word and game_over is true',()=>{
        let input_word = 'THINK'
        let API_word = 'WATER'
        let is_game_over = false
        let current_row = 5
        expect(row_checker(input_word, API_word,is_game_over, current_row )).toStrictEqual({"message": 'WATER', "is_game_over": true})
    })
    test('Check if the row number is incremented',()=>{
        let input_word = 'THINK'
        let API_word = 'WATER'
        let is_game_over = false
        let current_row = 3
        let current_square = 5
        const incrementedValue = 4
        expect(row_checker(input_word, API_word,is_game_over, current_row, current_square)).toStrictEqual(incrementedValue)
    })
        
})

