import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
export const ref = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

ref.input.addEventListener(
  'input',
  debounce(() => {
    const searchName = ref.input.value.trim();
    if (searchName.length > 1) {
      fetchCountries(searchName);
    }
  }, DEBOUNCE_DELAY),
);

// trow Error
// .catch(reject => {
//       console.log(reject);
//       return Notify.failure('qqqqqqqqqq');
//     })
