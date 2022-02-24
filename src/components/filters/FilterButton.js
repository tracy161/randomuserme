import React from 'react';
import { Button } from 'react-bootstrap';
import './filters.css'

const FilterButtons = ({handleMale, handleFemale}) => {
  return (
    <>
      <div className='filter'>
        <div className='item'>
          <h2>Filters: </h2>
        </div>
        <div className='item'>
          <Button variant='outline-primary' onClick={handleMale}>Male</Button>
        </div>
        <div className='item'>
          <Button variant='outline-primary' onClick={handleFemale}>Female</Button>
        </div>
      </div>
    </>
  );
};



export default FilterButtons;
