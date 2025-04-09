import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44728966-7765244b057c0982fa05c31d9',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: null,
    per_page: 40,
    totalHits: null,
  },
});

export async function getAllPhotos(inputValue) {
  instance.defaults.params.page = 1;
  instance.defaults.params.q = inputValue;
  try {
    const response = await instance.get();
    instance.defaults.params.totalHits = response.data.totalHits;
    return response.data.hits;
  } catch (error) {
    console.error('Error');
  }
}

export async function getMorePhotos(inputValue) {
  instance.defaults.params.page += 1;
  instance.defaults.params.q = inputValue;
  try {
    const response = await instance.get();
    return response.data.hits;
  } catch (error) {
    console.error('Error');
  }
}
