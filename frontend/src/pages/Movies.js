import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Movies.css'; // Optional: Create this file for styling

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="movies">
      <h1>Available Movies</h1>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie._id} className="movie-card">
              <img src={movie.imageUrl} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>Price: ${movie.price}</p>
              <p>Condition: {movie.condition}</p>
              <Link to={`/movies/${movie._id}`} className="btn">View Details</Link>
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
