import { fetchImages } from './js/pixabay-api';
import { displayImages, displayToast } from './js/render-functions';
const searchForm = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.spinner');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  const searchData = event.target.elements.search_input.value.trim();
  if (searchData === '') {
    displayToast('All form fields must be filled in', 'warning');
    loader.classList.add('is-hidden');
    return;
  }

  fetchImages(searchData)
    .then(images => {
      if (images.total === 0) {
        displayToast(
          'Sorry, there are no images matching your search query. Please try again!',
          'error'
        );
        return;
      }

      displayImages(images.hits, gallery);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      displayToast(
        'An error occurred while fetching images. Please try again later.',
        'error'
      );
    })
    .finally(() => {
      event.target.reset();
      loader.classList.add('is-hidden');
    });
});
