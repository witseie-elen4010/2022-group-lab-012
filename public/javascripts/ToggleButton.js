const Toggle = document.querySelector('.Toggle')
const Text = document.querySelector('.Button-Text')
const ToggleStatus = document.getElementById('Text')

LoadToSinglePlayerUntimed()
function ToggleAnimated () {

  Toggle.classList.toggle('active')

  if (Toggle.classList.contains('active') === true) {
    Text.innerHTML = 'TIMED-MODE'
    ToggleStatus.innerHTML = 'TimedMode'
    LoadToSinglePlayertimed()
  }   
  else {
    Text.innerHTML = 'UNTIMED-MODE'
    ToggleStatus.innerHTML = 'UntimedMode'
    LoadToSinglePlayerUntimed()

  }

}
