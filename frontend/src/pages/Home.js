import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Create this file for styling

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Dark Woods Media</h1>
        <p>Your favorite place to buy movies online.</p>
        <Link to="/movies" className="btn">Browse Movies</Link>
      </header>
      <section className="home-featured">
        <h2>Featured Movies</h2>
        <div className="featured-movies">
          {/* Add featured movies here */}
          <div className="featured-movie">
            <img src="https://via.placeholder.com/300" alt="Featured Movie 1" />
            <h3>Featured Movie 1</h3>
          </div>
          <div className="featured-movie">
            <img src="https://via.placeholder.com/300" alt="Featured Movie 2" />
            <h3>Featured Movie 2</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
