import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/styles.css';
import { axios } from 'axios';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { fetchImg } from './fetchImg';

export let page = 1;
export let per_page = 3;
export let totalPage = null;
export const ref = {
  form: document.querySelector('#search-form'),
  buttonSearch: document.querySelector('#search-button'),
  buttonLoad: document.querySelector('.load-more '),
  input: document.querySelector('#search-input'),
  gallery: document.querySelector('.gallery'),
};
console.log(ref);
ref.form.addEventListener('submit', inputData);
ref.buttonLoad.addEventListener('click', loadImg);
function loadImg(e) {
  const inputValue = ref.input.value;
  page += 1;
  fetchImg(inputValue);
}

function inputData(evt) {
  evt.preventDefault();
  ref.gallery.innerHTML = '';
  // const inputValue = ref.input.value.trim();
  const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
  page = 1;
  fetchImg(inputValue);
}
