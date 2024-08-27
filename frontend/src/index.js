import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: include your global CSS styles

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
