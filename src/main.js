import { fetchPhotos } from './js/pixabay-api.js';
import {
  renderPhotos,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  notifySuccess,
  notifyError,
  initLightbox,
  refreshLightbox,
} from './js/render-functions.js';

let currentPage = 1;
let currentQuery = '';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more-btn');

form?.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) return;

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreBtn();

  try {
    showLoader();
    const { hits, totalHits } = await fetchPhotos(query, currentPage);

    if (hits.length === 0) {
      notifyError('No images found. Try again.');
      return;
    }

    renderPhotos(hits);
    notifySuccess(`Hooray! We found ${totalHits} images.`);
    initLightbox();
    refreshLightbox();

    if (hits.length < 40) {
      hideLoadMoreBtn();
    } else {
      showLoadMoreBtn();
    }
  } catch (error) {
    notifyError('Something went wrong. Please try again.');
  } finally {
    hideLoader();
  }
});

loadMoreBtn?.addEventListener('click', async () => {
  currentPage += 1;

  try {
    showLoader();
    const { hits } = await fetchPhotos(currentQuery, currentPage);
    renderPhotos(hits);
    refreshLightbox();

    if (hits.length < 40) {
      hideLoadMoreBtn();
    }
  } catch (error) {
    notifyError('Failed to load more images.');
  } finally {
    hideLoader();
  }
});
