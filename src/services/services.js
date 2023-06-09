const API_KEY = '35113425-894140f70267936d7d418e310';
const BASE_URL = 'https://pixabay.com/api/';

const fetchAPI = (searchText, page = 1) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`There are no ${searchText} images matching your search`)
    );
  });
};
const api = {
  fetchAPI,
};
export default api;
