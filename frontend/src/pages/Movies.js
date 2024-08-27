import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies">
      <header className="movies-header">
        <h1>Our Movies</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <section className="movie-list">
        {movies.length > 0 ? (
          movies
            .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
            .map((movie) => (
              <div key={movie._id} className="movie-card">
                <img src={movie.image} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>Price: ${movie.price}</p>
                <p>Condition: {movie.condition}</p>
              </div>
            ))
        ) : (
          <p>No movies available.</p>
        )}
      </section>
    </div>
  );
};

export default Movies;
