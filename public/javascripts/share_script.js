// #Reference: https://github.com/mariofornaroli/y-share-button-share-api
const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {
  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'See how I did in SpaceWordle today.',
      url: 'https://wordlegame.org/'
    }).then(() => {
      console.log('Thanks for sharing!')
    })
      .catch((err) => console.error(err))
  } else {
    // Fallback
    // alert('The current browser does not support the share function. Please, manually share the link')
  }
})
