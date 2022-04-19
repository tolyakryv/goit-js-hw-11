import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/styles.css';
import { Notify } from 'notiflix';
import { fetchImg } from './fetchImg';
import { LoadMoreBtn } from './buttonHidden';
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
const loadMoreBtn = new LoadMoreBtn({
  elements: ref.buttonLoad,
  className: 'isHidden',
});
loadMoreBtn.hide();
ref.form.addEventListener('submit', inputData);
ref.buttonLoad.addEventListener('click', loadImg);
function loadImg() {
  const inputValue = ref.input.value;
  page += 1;
  fetchImg(inputValue).then(response => {
    totalPage = response.totalHits / per_page;
    console.log(response.hits.length);
    if (page > totalPage) {
      loadMoreBtn.hide();
      Notify.success("We're sorry, but you've reached the end of search results.");
    }
    // if (per_page > response.hits.lengths) {
    //   loadMoreBtn.hide();
    // }
  });
}

function inputData(evt) {
  evt.preventDefault();
  ref.gallery.innerHTML = '';

  const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
  page = 1;
  fetchImg(inputValue).then(response => {
    if (per_page > response.hits.length) {
      loadMoreBtn.hide();
    }
    if (response.totalHits === 0) {
      loadMoreBtn.hide();
      return Notify.failure(
        '"Sorry, there are no images matching your search query. Please try again."',
      );
    }
    Notify.success(`Hooray! We found ${response.totalHits} images.`);
  });

  loadMoreBtn.show();
}
