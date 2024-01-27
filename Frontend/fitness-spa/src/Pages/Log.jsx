import React, { useState } from 'react';
import axios from 'axios';

const LogWorkout = () => {
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');

  const handleLogWorkout = async () => {
    try {
      // Retrieve the JWT token from local storage
      const token = localStorage.getItem('userToken'); // Replace with your actual key

      const response = await axios.post(
        'https://colorful-attire-tick.cyclic.app/log-workout',
        {
          exerciseType,
          duration,
          intensity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data); // Handle the response as needed (e.g., show success message or update state)
    } catch (error) {
      console.error('Error logging workout:', error);
    }
  };

  return (
    <div>
      <h2>Log Workout Page</h2>
      <label>Exercise Type: </label>
      <input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} />
      <br />
      <label>Duration: </label>
      <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <br />
      <label>Intensity: </label>
      <input type="text" value={intensity} onChange={(e) => setIntensity(e.target.value)} />
      <br />
      <button onClick={handleLogWorkout}>Log Workout</button>
    </div>
  );
};

export default LogWorkout;