import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const ref = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-list'),
};
ref.input.addEventListener(
  'input',
  debounce(() => {
    const searchName = ref.input.value;
    console.log(ref.input.value);
  }, 300),
);
// function fetchCountries(name) {}
// https://restcountries.com/v2/name/{name}
// .trim()
// trow Error
