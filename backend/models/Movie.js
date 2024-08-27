// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
