import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/movies`);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>Price: ${movie.price}</p>
            <p>Condition: {movie.condition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
