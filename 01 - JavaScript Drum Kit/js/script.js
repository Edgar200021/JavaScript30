window.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key')

  //?    First Solution

  //  document.addEventListener('keydown', (e) => {
  //    keys.forEach((item) => {
  //      if (
  //        e.key.toLowerCase() === item.firstElementChild.innerText.toLowerCase()
  //      ) {
  //        const audio = document.querySelector(
  //          `audio[data-key="${item.dataset['key']}"]`
  //        )

  //        audio.currentTime = 0
  //        audio.play()
  //        item.classList.add('playing')
  //        setTimeout(() => {
  //          item.classList.remove('playing')
  //        }, 100)
  //      }
  //    })
  //  })

  //?      Second solution

  function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (!audio) return

    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return

    this.classList.remove('playing')
  }

  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
  })

  document.addEventListener('keydown', playSound)
})
