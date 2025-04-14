import { fetchPhotos } from './js/pixabay-api';
import {
  renderPhotos,
  clearGallery,
  toggleLoader,
  toggleLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';

let currentPage = 1;
let searchQuery = '';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

form.addEventListener('submit', async e => {
  e.preventDefault();
  searchQuery = e.target.elements.searchQuery.value.trim();
  if (!searchQuery) return;

  currentPage = 1;
  clearGallery();
  toggleLoader(true);
  toggleLoadMoreButton(false);

  try {
    const data = await fetchPhotos(searchQuery, currentPage);
    if (data.hits.length === 0) {
      iziToast.info({ message: 'No images found. Try again.' });
      return;
    }
    renderPhotos(data.hits);
    toggleLoadMoreButton(data.hits.length >= 40);
  } catch (err) {
    iziToast.error({ message: 'Something went wrong.' });
  } finally {
    toggleLoader(false);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  toggleLoader(true);

  try {
    const data = await fetchPhotos(searchQuery, currentPage);
    renderPhotos(data.hits);
    toggleLoadMoreButton(data.hits.length >= 40);
  } catch (err) {
    iziToast.error({ message: 'Error loading more images.' });
  } finally {
    toggleLoader(false);
  }
});
