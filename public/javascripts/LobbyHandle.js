
function PlayGame() {    

    const Playbutton = document.getElementById('PlayBtn')
    Playbutton.addEventListener('click', function myFunction () { 
    const Number = document.getElementById('NumberOfPlayers').innerText
    const Num = parseInt(Number)
    if(Number > 1)
    {  window.location = '/PlaySingleTimed' }
    
    }, false)
 }

 PlayGame()