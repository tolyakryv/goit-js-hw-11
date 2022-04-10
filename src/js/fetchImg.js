import { Notify } from 'notiflix';

import { renderMarkup } from './renderMarkup';
import { page } from '.';
import { per_page } from '.';
const BAS_URL = 'https://pixabay.com/api/';
const KEY = '26622976-b5b30f097ffc08e63415dc10e';
export function fetchImg(searchName) {
  fetch(
    `${BAS_URL}?key=${KEY}&q=${searchName}&image_type=photo&page=${page}&per_page=${per_page}&orientation=horizontal&safesearch=true`,
  )
    .then(response => response.json())
    .then(renderMarkup)
    .catch(() =>
      Notify.failure('"Sorry, there are no images matching your search query. Please try again."'),
    );
}
