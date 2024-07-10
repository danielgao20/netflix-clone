import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
    </div>
  );
};

export default MovieCard;
