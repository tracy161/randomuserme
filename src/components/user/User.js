import React from 'react';
import { Card, Col } from 'react-bootstrap';

const User = ({ user }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant='top' src={user.picture.large} />
          <Card.Body>
            <Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
            <Card.Text>
              <small style={{ fontSize: '0.6rem' }}>
                <strong>Email: </strong> <br />
                {user.email}
              </small>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;
