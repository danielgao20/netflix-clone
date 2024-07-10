const express = require('express');
const Movie = require('../models/Movie');
const User = require('../models/User');
const router = express.Router();

// Get All Movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add to Watchlist
router.post('/:movieId/watchlist', async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const movie = await Movie.findById(req.params.movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    user.watchlist.push(movie);
    await user.save();

    res.status(200).json({ message: 'Movie added to watchlist' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// route for adding movies
router.post('/add', async (req, res) => {
  const { title, description, trailerUrl, genre, releaseDate } = req.body;
  try {
    const newMovie = new Movie({
      title,
      description,
      trailerUrl,
      genre,
      releaseDate,
    });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
