// backend/routes/movies.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie'); // Ensure the correct path to your Movie model

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
