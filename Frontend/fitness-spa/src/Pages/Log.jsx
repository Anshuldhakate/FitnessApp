import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

      console.log(response.data); 
    } catch (error) {
      console.error('Error logging workout:', error);
    }
  };

  return (
    <Container>
      <Title>Log Workout Page</Title>
      <Label>Exercise Type:</Label>
      <Input
        type="text"
        value={exerciseType}
        onChange={(e) => setExerciseType(e.target.value)}
      />
      <Label>Duration:</Label>
      <Input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <Label>Intensity:</Label>
      <Input
        type="text"
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
      />
      <Button onClick={handleLogWorkout}>Log Workout</Button>
    </Container>
  );
};

export default LogWorkout;


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;