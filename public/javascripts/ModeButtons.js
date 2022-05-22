const ToggleState = document.getElementById('Text')

function Redirect(url)
{
  window.location = url
}

LoadToSinglePlayerUntimed()
function LoadToSinglePlayertimed () {

  if (ToggleState.innerHTML === 'TimedMode') {
    
    const SinglePlayerbutton = document.getElementById('SinglePlayBtn')
    SinglePlayerbutton.addEventListener('click', function myFunction () {
    window.location = '/PlaySingleTimed'
    }, false)
  }

}

function LoadToSinglePlayerUntimed () {

  if (ToggleState.innerHTML === 'UntimedMode') {

    const SinglePlayerbutton = document.getElementById('SinglePlayBtn')
    SinglePlayerbutton.addEventListener('click', function myFunction () {
    window.location = '/PlaySingleUntimed'
    }, false)
  }

}

