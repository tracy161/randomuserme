import React from 'react';

const PageHeader = () => {
  return (
    <>
      <div className='page-header' style={pageHeaderStyle}>
        <h1>Random User App</h1>
      </div>
    </>
  );
};

const pageHeaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '3rem',
};

export default PageHeader;
