export function fetchImages(searchData) {
  const searchParams = new URLSearchParams({
    key: '44728966-7765244b057c0982fa05c31d9',
    q: searchData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
