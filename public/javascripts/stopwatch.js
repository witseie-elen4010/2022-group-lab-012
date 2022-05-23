// Definition of varibles holding time
let hours = 0
let minutes = 0
let seconds = 0

let showSeconds = 0
let showMinutes = 0
let showHours = 0

// Queryu Timed and Untimed mode button.
const Toggle2 = document.querySelector('.Toggle')
const Text2 = document.querySelector('.Button-Text')

// Stopwatch implementation

function stopWatch () {
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

  if (seconds < 10) {
    showSeconds = '0' + seconds.toString()
  } else {
    showSeconds = seconds
  }
  if (minutes < 10) {
    showMinutes = '0' + minutes.toString()
  } else {
    showMinutes = minutes
  }
  if (hours < 10) {
    showHours = '0' + hours.toString()
  } else {
    showHours = hours
  }

  // Show time updated
  document.getElementById('display').innerHTML = showHours + ':' + showMinutes + ':' + showSeconds
}

function start () {
  window.setInterval(stopWatch, 1000)
}

start()
