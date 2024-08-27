// routes/movies.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie'); // Adjust the path as needed

// GET /api/movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
