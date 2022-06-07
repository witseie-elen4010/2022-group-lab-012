const ToggleState = document.getElementById('Text')

function Redirect(url)
{
  window.location = url
}

LoadToSinglePlayertimed()
WaitInlobby()
function LoadToSinglePlayertimed () {
    
    const SinglePlayerbutton = document.getElementById('SinglePlayBtn')
    SinglePlayerbutton.addEventListener('click', function myFunction () {
    window.location = '/PlaySingleTimed'
    }, false)
  
}

/*function LoadToSinglePlayerUntimed () {

  if (ToggleState.innerHTML === 'UntimedMode') {

    const SinglePlayerbutton = document.getElementById('SinglePlayBtn')
    SinglePlayerbutton.addEventListener('click', function myFunction () {
    window.location = '/PlaySingleUntimed'
    }, false)
  }
}*/

function WaitInlobby() {
    
    const MultiPlayerbutton = document.getElementById('MultiPlayBtn')
    MultiPlayerbutton.addEventListener('click', function myFunction () {
    window.location = '/multiplay'
    }, false)
}

