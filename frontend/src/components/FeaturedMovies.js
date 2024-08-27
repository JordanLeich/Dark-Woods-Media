// frontend/src/components/FeaturedMovies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedMovies.css';

const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies?featured=true'); // Adjust if your API has a filter
        setFeaturedMovies(response.data);
      } catch (err) {
        setError('Failed to fetch featured movies');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="featured-movies-container">
      <h1>Featured Movies</h1>
      {featuredMovies.length === 0 ? (
        <p>No featured movies available</p>
      ) : (
        <div className="featured-movies-list">
          {featuredMovies.map((movie) => (
            <div key={movie._id} className="featured-movie-card">
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

export default FeaturedMovies;
