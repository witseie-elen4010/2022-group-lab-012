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
