const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
let cities = [];

fetch(endpoint)
    .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function (data) {
        console.log(cities.push(...data))
    })

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// search city or state
function findMatch(matchWord, cities) {
    return cities.filter(place => {
        const regex = new RegExp(matchWord, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}
// show match city or state
function displayMatch() {
    const match = findMatch(this.value, cities);
    const html = match.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h3">${this.value}</span>`);

        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="suggestions">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join("");
    suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);