const axios = require('axios');
const BASE_URL = 'http://localhost:3000';

async function getAllBooks() {
  const res = await axios.get(`${BASE_URL}/books`);
  console.log(res.data);
}

function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/books/${isbn}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}

async function getBooksByAuthor(author) {
  const res = await axios.get(`${BASE_URL}/books/author/${author}`);
  console.log(res.data);
}

async function getBooksByTitle(title) {
  const res = await axios.get(`${BASE_URL}/books/title/${title}`);
  console.log(res.data);
}

// Run all for testing
getAllBooks();                      // Task 10
getBookByISBN("111");              // Task 11
getBooksByAuthor("John Doe");      // Task 12
getBooksByTitle("Book A");         // Task 13