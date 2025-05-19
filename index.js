const express = require('express');
const app = express();
app.use(express.json());

const books = require('./books');
const users = require('./users');
const reviews = require('./reviews');

app.use('/books', books);
app.use('/users', users);
app.use('/reviews', reviews);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});