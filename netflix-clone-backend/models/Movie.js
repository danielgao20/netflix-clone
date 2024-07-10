const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trailerUrl: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
