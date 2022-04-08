import { renderMarkup } from './renderMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function fetchCountries(name) {
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
