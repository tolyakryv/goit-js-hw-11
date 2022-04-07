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

    fetchCountries(searchName);
  }, DEBOUNCE_DELAY),
);

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(renderMarkup);
}
function renderMarkup(name) {
  ref.list.innerHTML = '';
  ref.info.innerHTML = '';
  if (name.length == null) {
    Notify.failure('not found');
  }
  const markupCountriesInfo = name
    .map(
      ({ name, capital, flag, population, languages }) =>
        `<ul><li><img src='${flag}' alt ="${name}"  width="30" height="15" ></img>   ${name}</li>
      <li>Capital: ${capital}</li>
      <li>Population: ${population}</li>
      <li>Languages:${languages[0].name}</li></ul>`,
    )
    .join('');
  const markupCountriesList = name
    .map(
      ({ name, flag }) =>
        `<li><img src='${flag}' alt ="${name}"  width="30" height="15" ></img>   ${name}</li>`,
    )
    .join('');
  if (name.length === 1) {
    ref.info.insertAdjacentHTML('afterbegin', markupCountriesInfo);
  } else {
    if (name.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      return console.log(name.length);
    }
    ref.list.insertAdjacentHTML('afterbegin', markupCountriesList);
  }
}

// trow Error
// .catch(reject => {
//       console.log(reject);
//       return Notify.failure('qqqqqqqqqq');
//     })
