const panels = document.querySelector('.panels'),
  panel = document.querySelectorAll('.panel')

panels.addEventListener('click', (e) => {
  const self = e.target
  if (!self.closest('.panel')) return

  panel.forEach((item) => {
    item.classList.remove('open')
    item.classList.remove('open-active')
  })

  self.classList.add('open')
  self.addEventListener('transitionend', () => {
    self.classList.add('open-active')
  })
})
