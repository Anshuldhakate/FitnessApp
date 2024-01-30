import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make an API request to the home route
    axios.get('https://myfitness-fg69.onrender.com/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <HomeContainer>
      <TopSection>
        <Heading>
          Welcome To Fitness Spa <br />
          <span>Your Journey to a Healthy Lifestyle</span>
        </Heading>
      </TopSection>

      <ServicesSection>
        <SectionHeading>Our Services</SectionHeading> <br />
        <Service>
        <ServiceList>
          <ServiceItem>✅Fitness Classes</ServiceItem>
          <ServiceItem>✅Personal Training</ServiceItem>
          <ServiceItem>✅Wellness Programs</ServiceItem>
          <ServiceItem>✅Mindfulness and Meditation Sessions</ServiceItem>
          <ServiceItem>✅Weight Management Programs</ServiceItem>
          <ServiceItem>✅Health and Wellness Seminars</ServiceItem>
          
          {/* Add more services as needed */}
        </ServiceList>
        <ServiceList1>
        <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </ServiceList1>
        </Service>
        
      </ServicesSection>

      <AboutSection>
        <SectionHeading>About Us</SectionHeading>
        <AboutText>
          At Fitness Spa, we are dedicated to helping you achieve your fitness goals and live a healthier life. Our experienced trainers and wellness experts are here to guide you on your journey.
        </AboutText>
      </AboutSection>

      
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  margin: auto;
  color: #333;
`;

const TopSection = styled.div`
  background-image: url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: 0%;
  background-repeat: no-repeat;
  height: 600px;
  width: 100%;
  margin-top: -32px;
  color: white;
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  padding: 1rem;
  text-align: center;
  color: black;

  span {
    display: block;
    font-size: 1.5rem;
  }
`;

const ServicesSection = styled.div`
  background-color: #f9f9f9;
  padding: 40px 20px;
  background-color: whitesmoke;
`;

const Service= styled.div`
    display: flex;
`

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  width: 100%;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 10%;
  width: 50%;
  text-align: justify;
`;
const ServiceList1 = styled.div`
  padding: 2%;
  text-align: center;
  width: 50%;
  margin: 2%;
  box-shadow: 0 29px 52px rgba(0,0,0,0.40), 0 25px 16px rgba(0,0,0,0.20);
`;

const ServiceItem = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const AboutSection = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: whitesmoke;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;



export default Home;
