import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  notifySuccess,
  notifyError,
  initLightbox,
  refreshLightbox,
} from './js/render-functions';

const IMAGES_PER_PAGE = 15;
let currentPage = 1;
let currentQuery = '';
let totalAvailableImages = 0;

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');

form?.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) return;

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();

  try {
    showLoader();
    const { hits, totalHits } = await getImagesByQuery(
      currentQuery,
      currentPage,
      IMAGES_PER_PAGE
    );
    totalAvailableImages = totalHits;

    if (hits.length === 0) {
      notifyError('No images found. Try again.');
      return;
    }

    createGallery(hits);
    notifySuccess(`Hooray! We found ${totalHits} images.`);
    initLightbox();

    if (currentPage * IMAGES_PER_PAGE < totalAvailableImages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      notifyError("We're sorry, but you've reached the end of search results.");
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
    const { hits } = await getImagesByQuery(
      currentQuery,
      currentPage,
      IMAGES_PER_PAGE
    );

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    createGallery(hits);
    refreshLightbox();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage * IMAGES_PER_PAGE >= totalAvailableImages) {
      hideLoadMoreButton();
      notifyError("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    notifyError('Failed to load more images.');
  } finally {
    hideLoader();
  }
});
