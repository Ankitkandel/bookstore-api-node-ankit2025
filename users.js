const express = require('express');
const router = express.Router();

let users = [];

router.post('/register', (req, res) => {
  users.push(req.body);
  res.json({ message: "User registered" });
});

router.post('/login', (req, res) => {
  const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
  if (user) res.json({ message: "Login successful", token: "fake-jwt-token" });
  else res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;