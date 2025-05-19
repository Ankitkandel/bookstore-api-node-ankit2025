const express = require('express');
const router = express.Router();

let reviews = {};

router.put('/:isbn', (req, res) => {
  reviews[req.params.isbn] = req.body.review;
  res.json({ message: "Review added/updated" });
});

router.delete('/:isbn/:user', (req, res) => {
  if (reviews[req.params.isbn]) {
    delete reviews[req.params.isbn];
    res.json({ message: "Review deleted" });
  } else {
    res.status(404).json({ message: "No review to delete" });
  }
});

module.exports = router;