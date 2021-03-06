import axios from 'axios';

export default {
  googleSearch: searchTerms => {
    searchTerms = searchTerms.replace(/ /g, '+');
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`);
  },

  getBooks: () => {
    return axios.get('./api/books');
  },

  saveBook: (bookId, title, authors, description, image, link) => {
    return axios.post(`/api/books`, { bookId, title, authors, description, image, link });
  },

  deleteBook: bookId => {
    return axios.delete(`/api/books/${bookId}`);
  }
};
