import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={footer}>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h6 href='/' style={{ color: 'white' }}>
            Random User App
          </h6>
        </div>
        <div style={{ color: 'white' }}>
          <h6>CopyRight {new Date().getUTCFullYear()}</h6>
        </div>
      </Container>
    </footer>
  );
};

const footer = {
  marginTop: '30px',
  padding: '20px',
  backgroundColor: '#212529',
};

export default Footer;
