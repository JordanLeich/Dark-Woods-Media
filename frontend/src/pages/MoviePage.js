import React, { useEffect, useState } from 'react';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie._id}>
              <h2>{movie.title}</h2>
              <p>Price: ${movie.price}</p>
              <p>Condition: {movie.condition}</p>
              <img src={movie.imageUrl} alt={movie.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MoviesPage;
