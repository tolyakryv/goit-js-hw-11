import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const ref = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

ref.input.addEventListener(
  'input',
  debounce(() => {
    const searchName = ref.input.value.trim();
    if (searchName.length > 1) {
      fetchCountries(searchName);
    }
  }, DEBOUNCE_DELAY),
);

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}?name,capital,flag,population,languages`)
    .then(response => {
      return response.json();
    })
    .then(renderMarkup)
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      console.log(error);
    });
}
function renderMarkup(value) {
  ref.list.innerHTML = '';
  ref.info.innerHTML = '';
  const language = value[0].languages.map(({ name }) => name).join(',  ');
  const markupCountriesInfo = value
    .map(
      ({ name, capital, flags: { svg }, population, languages }) =>
        `<ul><li><img src='${svg}' alt ="${name}"  width="30" height="15" ></img>   ${name}</li>
      <li>Capital:  ${capital}</li>
      <li>Population:  ${population}</li>
      <li>Languages:  ${language}</li></ul>`,
    )
    .join('');
  const markupCountriesList = value
    .map(
      ({ name, flags: { svg } }) =>
        `<li><img src='${svg}' alt ="${name}"  width="30" height="15" ></img>   ${name}</li>`,
    )
    .join('');
  if (value.length === 1) {
    ref.info.insertAdjacentHTML('afterbegin', markupCountriesInfo);
  } else {
    if (value.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      return console.log(value.length);
    }
    ref.list.insertAdjacentHTML('afterbegin', markupCountriesList);
  }
}

// trow Error
// .catch(reject => {
//       console.log(reject);
//       return Notify.failure('qqqqqqqqqq');
//     })
