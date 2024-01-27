import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileUpdate = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch or set the token when the component mounts
    const storedToken = localStorage.getItem('userToken'); // Replace with your actual key
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put(
        'https://colorful-attire-tick.cyclic.app/profile',
        {
          age,
          weight,
          fitnessGoals,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response.data); // Handle the response as needed (e.g., show success message or update state)
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Profile Update Page</h2>
      <label>Age: </label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <label>Weight: </label>
      <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <br />
      <label>Fitness Goals: </label>
      <input type="text" value={fitnessGoals} onChange={(e) => setFitnessGoals(e.target.value)} />
      <br />
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
};

export default ProfileUpdate;
