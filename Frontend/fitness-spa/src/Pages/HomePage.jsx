import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make an API request to the home route
    axios.get('https://colorful-attire-tick.cyclic.app/')
      .then(response => setMessage(response.data.msg))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home;