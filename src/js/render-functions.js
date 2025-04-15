import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const markup = images
    .map(
      image => `
      <li class="image-container">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info-bar">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox?.refresh(); // Оновлюємо SimpleLightbox після додавання нових карток
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) gallery.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader-wrap')?.classList.remove('disabled');
}

export function hideLoader() {
  document.querySelector('.loader-wrap')?.classList.add('disabled');
}

export function showLoadMoreButton() {
  document.querySelector('.load-more-btn')?.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more-btn')?.classList.add('hidden');
}

export function notifySuccess(message) {
  iziToast.success({ message, position: 'topRight' });
}

export function notifyError(message) {
  iziToast.error({ message, position: 'topRight' });
}

export function initLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

export function refreshLightbox() {
  lightbox?.refresh();
}
