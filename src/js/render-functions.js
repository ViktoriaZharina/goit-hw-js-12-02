export function renderPhotos(photos) {
  const gallery = document.querySelector('.gallery');
  const markup = photos
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a class="photo-card" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function toggleLoader(show) {
  const loader = document.querySelector('.loader');
  loader.style.display = show ? 'block' : 'none';
}

export function toggleLoadMoreButton(show) {
  const btn = document.querySelector('[data-action="load-more"]');
  btn.style.display = show ? 'block' : 'none';
}
