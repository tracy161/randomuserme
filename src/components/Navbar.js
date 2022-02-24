import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import userlogo from '../assets/images/user-logo.png'

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src={userlogo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Random User App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
