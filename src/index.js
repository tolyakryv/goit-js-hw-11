import './css/styles.css';
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

//return fetch('https://restcountries.com/v2/name/sweden');
function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(renderMarkup);
}
function renderMarkup(name) {
  return name.map(({ name }) => (ref.list.innerHTML = `<li>${name}</li>`));
}

// trow Error
