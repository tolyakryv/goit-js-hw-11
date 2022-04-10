import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/styles.css';
import { axios } from 'axios';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { fetchImg } from './fetchImg';

export let page = 1;
export let per_page = 40;
export let totalPage;
export const ref = {
  form: document.querySelector('#search-form'),
  button: document.querySelector('#search-button'),
  input: document.querySelector('#search-input'),
  gallery: document.querySelector('.gallery'),
};
ref.form.addEventListener('submit', inputData);
function inputData(evt) {
  evt.preventDefault();
  // const inputValue = ref.input.value.trim();
  const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
  fetchImg(inputValue);
}
