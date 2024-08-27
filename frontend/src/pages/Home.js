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
    </div>
  );
};

export default Home;
