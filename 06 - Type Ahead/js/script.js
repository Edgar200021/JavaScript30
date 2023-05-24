const search = document.querySelector('.search'),
  suggestions = document.querySelector('.suggestions')

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

//const cities = []

//async function fetchData() {
//  const response = await fetch(endpoint)
//  const data = await response.json()
//  cities.push(...data)
//}

const cities = [
  { city: 'New-York', state: 'New-York' },
  {
    city: 'Friendswood',
    state: 'Texas',
  },
  {
    city: 'Westerville',
    state: 'Ohio',
  },
  {
    city: 'Northglenn',
    state: 'Colorado',
  },
  {
    city: 'Phenix City',
    state: 'Alabama',
  },
]



function findMatches(wordToMatch, cities) {
  const filteredArr = cities
    .filter((place) => {
      return (
        place.city.toLowerCase().trim().includes(wordToMatch) ||
        place.state.toLowerCase().trim().includes(wordToMatch)
      )
    })
    .map((place) => {
      return [place.city, place.state]
    })

  return filteredArr
}

function showMatches() {
  const value = this.value.toLowerCase().trim(),
    matches = findMatches(value, cities)

  if (value === '') {
    suggestions.innerHTML = `
	<li>Filter for a city</li>
	<li>or a state</li>`
  } else {
    for (let match of matches) {
      const [city, state] = match
      const element = `<li>${city}, ${state}</li>`

      suggestions.insertAdjacentHTML('beforeend', element)
    }
  }
}

search.addEventListener('input', showMatches)
