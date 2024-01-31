// server/routes/contact.js
const express = require('express');
const router = express.Router();

// Endpoint for handling contact form submission
router.post('/submit', (req, res) => {
  // Code to handle contact form submission
  res.json({ message: 'Contact form submitted successfully' });
});

module.exports = router;
