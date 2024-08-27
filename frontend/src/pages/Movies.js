// frontend/src/pages/Movies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              {/* Add more movie details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
