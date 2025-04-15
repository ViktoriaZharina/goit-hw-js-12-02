import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

export function renderPhotos(photos) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const markup = photos
    .map(
      photo => `
      <li class="image-container">
        <a href="${photo.largeImageURL}">
          <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
        </a>
        <div class="info-bar">
          <p><b>Likes:</b> ${photo.likes}</p>
          <p><b>Views:</b> ${photo.views}</p>
          <p><b>Comments:</b> ${photo.comments}</p>
          <p><b>Downloads:</b> ${photo.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
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

export function showLoadMoreBtn() {
  document.querySelector('.load-more-btn')?.classList.remove('hidden');
}

export function hideLoadMoreBtn() {
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
