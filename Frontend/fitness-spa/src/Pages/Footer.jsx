// footer.jsx

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #9292f4;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #00bcd4;
  }
`;

const ContactSection = styled.div`
  margin-top: 20px;
`;

const EmailLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Line = styled.hr`
  width: 50%;
  margin: 15px 0;
  border: 0.5px solid #fff;
`;

const CopyrightNotice = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;
const ContactSectionn = styled.div`
  color: white;
  padding: 0px 0px;
  text-align: center;
`;

const ContactInfo = styled.div`
  p {
    font-size: 0.8rem;
    margin: 10px 0;
  }
`;
const SectionHeading = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: black;
  margin-bottom: 20px;
  width: 100%;
`;


const Footer = () => {
  return (
    <FooterContainer>
        <ContactSectionn>
        <SectionHeading>Contact Us</SectionHeading>
        <ContactInfo>
          <p>Address: 123 Fitness Street, Cityville</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: fitnessspa@gmail.com</p>
        </ContactInfo>
      </ContactSectionn>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </SocialIcon>
        {/* Add more social icons as needed */}
      </SocialIcons>
      <Line />
      <FooterText>
        Connect with us on{' '}
        <FooterLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </FooterLink>{' '}
        and{' '}
        <FooterLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </FooterLink>
      </FooterText>
      
      <Line />
      <CopyrightNotice>&copy; 2024 Your Fitness Website. All rights reserved.</CopyrightNotice>
    </FooterContainer>
  );
};

export default Footer;
