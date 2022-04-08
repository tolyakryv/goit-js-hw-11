import './css/styles.css';
// import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
export const ref = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};
