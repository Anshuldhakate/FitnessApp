import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make an API request to the home route
    axios.get('https://colorful-attire-tick.cyclic.app/')
      .then(response => setMessage(response.data.msg))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <DIV>
    <div id="top">
        <div>
            <h1>Welcome To Fitness Spa </h1>
            
            
        </div>
    </div>
    </DIV>
  );
};

export default Home;


const DIV= styled.div`
font-family: 'Poppins', sans-serif;
width: 100%;
margin: auto;

h1{
    font-size: 250%;
    padding: 1rem;
    text-align: center;
}

    
#top{
    background-image: url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Update the path */
    background-size: cover; 
    background-position: 0%;
    background-repeat: no-repeat;
    height: 600px;
    width: 100%;
    margin-top: -32px;
    color: white;
    text-align: start;   
}
#top{
    h1{
        font-family: 'Dancing Script', cursive;
        color: #07076c;
        padding: 5rem;
        text-align: left;
        font-size: 300%;
        
    }
    span{
        font-size: 50%;
        
    }

}
`