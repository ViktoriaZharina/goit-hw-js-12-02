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
  hideLoadMoreButton();

  try {
    showLoader();
    const { hits, totalHits } = await getImagesByQuery(
      currentQuery,
      currentPage
    );

    if (hits.length === 0) {
      notifyError('No images found. Try again.');
      return;
    }

    createGallery(hits); // Створюємо галерею з новими зображеннями
    notifySuccess(`Hooray! We found ${totalHits} images.`);
    initLightbox();

    // Перевіряємо, чи є ще сторінки для завантаження
    if (hits.length < 15 || currentPage * 15 >= totalHits) {
      hideLoadMoreButton(); // Якщо зображень менше ніж 15, ховаємо кнопку
      notifyError("We're sorry, but you've reached the end of search results.");
    } else {
      showLoadMoreButton(); // Якщо ще є сторінки, показуємо кнопку
    }
  } catch (error) {
    notifyError('Something went wrong. Please try again.');
  } finally {
    hideLoader();
  }
});

// Обробка натискання на кнопку "Load More"
loadMoreBtn?.addEventListener('click', async () => {
  currentPage += 1; // Збільшуємо сторінку при натисканні на кнопку

  try {
    showLoader();
    const { hits, totalHits } = await getImagesByQuery(
      currentQuery,
      currentPage
    );
    createGallery(hits); // Додаємо нові зображення до галереї
    refreshLightbox(); // Оновлюємо SimpleLightbox

    // Перевіряємо, чи є ще сторінки для завантаження
    if (hits.length < 15 || currentPage * 15 >= totalHits) {
      hideLoadMoreButton(); // Якщо зображень менше ніж 15 або досягнуто кінця, ховаємо кнопку
      notifyError("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    notifyError('Failed to load more images.');
  } finally {
    hideLoader();
  }
});

function scrollPage() {
  const imageContainer = document.querySelector('.image-container');
  if (imageContainer) {
    const { height } = imageContainer.getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}
