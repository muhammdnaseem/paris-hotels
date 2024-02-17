// Input.js (or your Input component file)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Paragraph = ({ className, Text }) => {
  return (
    <React.Fragment>
      <h2 className={className}> {Text} </h2>
    </React.Fragment>
  );
};

export default Paragraph;
