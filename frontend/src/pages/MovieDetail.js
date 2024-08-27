import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; // Optional: Create this file for styling

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details from the backend
    axios.get(`/api/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.imageUrl} alt={movie.title} />
      <p>Price: ${movie.price}</p>
      <p>Condition: {movie.condition}</p>
      <p>{movie.description}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default MovieDetail;
