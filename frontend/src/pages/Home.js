import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/featured-movies'); // Update this endpoint if needed
        setFeaturedMovies(response.data);
      } catch (error) {
        console.error('Error fetching featured movies:', error);
      }
    };

    fetchFeaturedMovies();
  }, []);

  return (
    <div className="home">
      <header className="header">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/movies">Movies</a>
        </nav>
        <div className="hero">
          <h1>Welcome to Dark Woods Media</h1>
          <p>Your favorite place to buy movies online.</p>
          <a href="/movies" className="cta-button">Browse Movies</a>
        </div>
      </header>
      <section className="featured">
        <h2>Featured Movies</h2>
        <div className="featured-carousel">
          {featuredMovies.length > 0 ? (
            featuredMovies.map(movie => (
              <div key={movie._id} className="movie-card">
                <img src={movie.image} alt={movie.title} />
                <h2>{movie.title}</h2>
              </div>
            ))
          ) : (
            <p>No featured movies available.</p>
          )}
        </div>
      </section>
      <footer className="footer">
        <p>Contact us at: info@darkwoodsmedia.com</p>
        <nav className="footer-nav">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
