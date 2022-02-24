import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={footer}>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navbar.Brand href='/' style={{ color: 'white' }}>
          Random User App
        </Navbar.Brand>
        <div style={{ color: 'white' }}>
          <p>CopyRight {new Date().getUTCFullYear()}</p>
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
