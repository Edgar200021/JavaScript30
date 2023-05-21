window.addEventListener('DOMContentLoaded', () => {
  const secondHand = document.querySelector('.hand.second-hand')
  const minuteHand = document.querySelector('.hand.min-hand')
  const hourHand = document.querySelector('.hand.hour-hand')
  const clock = document.querySelector('.clock')

  //function tick(e) {
  //	const self = e.target
  //	console.log('hello')

  //	if (self.classList.contains('second-hand')) {
  //		let rotateInSec = 90

  //		setInterval(() => {
  //			self.style.transform = `rotate(${rotateInSec}deg)`
  //			rotateInSec += 3.6
  //		}, 1000)

  //	}
  //}

  //function tick() {
  //	const hour = document.querySelector('.hand.hour-hand'),
  //		minute = document.querySelector('.hand.min-hand'),
  //		second = document.querySelector('.hand.second-hand')

  //	let hourRotate = 90,
  //		minuteRotate = 90,
  //		secondRotate = 90

  //	setInterval(() => {
  //		hour.style.transform = `rotate(${hourRotate})`
  //		hourRotate += 30
  //	}, 3.600000)

  //	setInterval(() => {
  //		minute.style.transform = `rotate(${minuteRotate}deg)`
  //		minuteRotate += 3.6
  //	}, 60000)

  //	setInterval(() => {
  //		second.style.transform = `rotate(${secondRotate}deg)`
  //		secondRotate += 3.6
  //	}, 1000)
  //}
  //clock.addEventListener('click', tick)

  function setDate() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = (seconds / 60) * 360 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
  }

  setInterval(setDate, 1000)
})
