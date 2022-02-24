import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import PageHeader from './components/PageHeader';
import User from './components/user/User';
import { Container, Row, Spinner } from 'react-bootstrap';
import FilterButtons from './components/filters/FilterButton';
import Footer from './components/Footer';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gender, setGender] = useState('');

  const handleMale = (e) => {
    e.preventDefault();
    setGender('male');
  };

  const handleFemale = (e) => {
    e.preventDefault();
    setGender('female');
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=30&gender=${gender}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [gender]);

  return (
    <>
      <NavBar />
      <Container>
        <PageHeader />
        <FilterButtons handleMale={handleMale} handleFemale={handleFemale} />
        <Row xs={2} md={3} lg={6} className='g-4'>
          {isLoading ? (
            <Spinner animation='border' role='status' style={{justifyContent: 'center', margin: 'auto'}}>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          ) : (
            users.map((user, index) => <User key={index} user={user} />)
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;
