// ProfileUpdate.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProfileUpdate = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
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

      console.log(response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container>
      <Title>Profile Update Page</Title>
      <Label>Age:</Label>
      <Input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Label>Weight:</Label>
      <Input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Label>Fitness Goals:</Label>
      <Input
        type="text"
        value={fitnessGoals}
        onChange={(e) => setFitnessGoals(e.target.value)}
      />
      <Button onClick={handleProfileUpdate}>Update Profile</Button>
    </Container>
  );
};

export default ProfileUpdate;
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