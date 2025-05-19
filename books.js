const express = require('express');
const router = express.Router();

let bookList = [
  { isbn: "111", title: "Book A", author: "John Doe", review: "Great book" },
  { isbn: "222", title: "Book B", author: "Jane Smith", review: "Good read" },
];

router.get('/', (req, res) => res.json(bookList));
router.get('/:isbn', (req, res) => {
  const book = bookList.find(b => b.isbn === req.params.isbn);
  res.json(book || { message: "Not found" });
});
router.get('/author/:author', (req, res) => {
  const books = bookList.filter(b => b.author === req.params.author);
  res.json(books);
});
router.get('/title/:title', (req, res) => {
  const books = bookList.filter(b => b.title === req.params.title);
  res.json(books);
});
router.get('/:isbn/review', (req, res) => {
  const book = bookList.find(b => b.isbn === req.params.isbn);
  res.json(book ? book.review : { message: "No review found" });
});

module.exports = router;