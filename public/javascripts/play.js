//Code Reference: https://github.com/kubowania/wordle-javascript
const display_square = document.querySelector('.tile-basket')
const keyboard_keys = document.querySelector('.keyboard-basket')
const displayed_message = document.querySelector('.message-basket')

const key_alphabets = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<',
]

const grid_row = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

let current_row = 0
let current_square = 0
let is_game_over = false
let is_enter_clicked = true
let is_multiplayer = true

function board() {
    for (let i = 0; i < grid_row.length; i++) {
        const row_element = document.createElement('div')
        //row_element.id = i
        row_element.setAttribute('id', 'grid_row_elements-' + i)
        let items = grid_row[i].length
        for (let j = 0; j < items; j++) {
            const square_element = document.createElement('div')
            square_element.setAttribute('id', 'grid_row_elements-' + i + '-tile-' + j)
            square_element.classList.add('tile')
            row_element.append(square_element)
        }
        display_square.append(row_element)
    }
}
board()

function keys() {
    for (let k = 0; k < key_alphabets.length; k++) {
        const button_element = document.createElement('button')
        button_element.textContent = key_alphabets[k]
        button_element.setAttribute('id', key_alphabets[k])
        button_element.addEventListener('click', () => handle_click(key_alphabets[k]))
        keyboard_keys.append(button_element)
    }
}
keys()


function handle_click(keyboard) {
    if (!is_game_over) {
        if (keyboard === '<<') {
            delete_letter()
            return
        }

        if (keyboard === 'ENTER') {
            row_checker()
            is_enter_clicked = false
            return
        }

        add_letter(keyboard)
    }
}



function delete_letter() {
    if (current_square > 0) {
        current_square--
        const square = document.getElementById('grid_row_elements-' + current_row + '-tile-' + current_square)
        square.textContent = ''
        grid_row[current_row][current_square] = ''
        square.setAttribute('data', '')
    }
}

function add_letter(alphabet) {
    if (current_square < 5 && current_row < 6) {
        const square = document.getElementById('grid_row_elements-' + current_row + '-tile-' + current_square)
        square.textContent = alphabet
        grid_row[current_row][current_square] = alphabet
        square.setAttribute('data', alphabet)
        current_square++
    }
}

let wordle_word
function get_word() {
    fetch('http://localhost:3000/word')
        .then(response => response.json())
        .then(json => {
            wordle_word = json.toUpperCase()
        })
        .catch(err => console.log(err))
}

//get_word()


function show_message(pop_up_status) {
    const message = document.createElement('p')
    message.textContent = pop_up_status
    displayed_message.append(message)
    setTimeout(() => displayed_message.removeChild(message), 2000)
}

const row_checker = () => {
    const guess = grid_row[current_row].join('')
    if (current_square > 4) {
        fetch(`http://localhost:3000/check/?word=${guess}`)
            .then(response => response.json())
            .then(json => {
                if (json == 'Entry word not found') {
                    show_message('INVALID ENTRY')
                    return
                }
                else {
                    flip_tile()
                    if (wordle_word == guess) {
                        show_message('Awesome!')
                        is_game_over = true
                        return
                    }
                    else {
                        if (current_row >= 5) {
                            is_game_over = true
                            show_message('Game Over The Word Is: ' + wordle_word)
                            return
                        }
                        else if (current_row < 5) {
                            current_row++
                            current_square = 0
                            return
                        }
                    }
                }
            }).catch(err => console.log(err))
    }
}

const keyboard_colour = (key_letter, colour) => {
    var key_alphabets = document.getElementById(key_letter)
    key_alphabets.classList.add(colour)
}

function flip_tile() {
    const row_squares = document.querySelector('#grid_row_elements-' + current_row).childNodes
    let word_checker = wordle_word
    const guesses = []

    row_squares.forEach(square => {
        guesses.push({ letter: square.getAttribute('data'), colour: 'absent' })
    })

    guesses.forEach((guesses, i) => {
        if (guesses.letter == wordle_word[i]) {
            guesses.colour = 'correct'
            word_checker = word_checker.replace(guesses.letter, '')
        }
    })

    guesses.forEach(guesses => {
        if (word_checker.includes(guesses.letter)) {
            guesses.colour = 'pressent'
            word_checker = word_checker.replace(guesses.letter, '')
        }
    })

    if (!is_enter_clicked) {
        row_squares.forEach((square, i) => {
            setTimeout(() => {
                square.classList.add('flip')
                square.classList.add(guesses[i].colour)
                keyboard_colour(guesses[i].letter, guesses[i].colour)
            }, 400 * i)
        })
        return
    }
}

(()=>{
    if(is_multiplayer){
    get_word()
    //var keyboard
    const socket = io()
    const click = flip_tile()
    socket.emit('turn', click) 
}
socket.on('turn', click)
})()