const inputs = document.querySelectorAll('.controls input')
const controls = document.querySelector('.controls')

function handleUpdate() {

//? Solution with changing wars

  const suffix = this.dataset['sizing'] || 'px'
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

// ? Solution without vars
//  const img = document.querySelector('img')

//  if (this.id === 'spacing') {
//    img.style.padding = `${this.value}px`
//  }

//  if (this.id === 'blur') {
//    img.style.filter = `blur(${this.value}px)`
//  }

//  if (this.id === 'base') {
//    img.style.backgroundColor = this.value
//  }
}


inputs.forEach((input) => {
  input.addEventListener('input', handleUpdate)
})
