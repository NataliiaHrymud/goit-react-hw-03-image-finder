import axios from 'axios';

const API_Url = "https://pixabay.com/api/"
const API_KEY = "16179097-8566271ab112e51de35a43208";
const perPage = 12;

const fetchGalleryWithQuery = (searchQuery, page) => {
    return axios
      .get(`${API_Url}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${API_KEY}`)
      .then(response => response.data.hits);
  };
  
  export default {
    fetchGalleryWithQuery,
  };
  