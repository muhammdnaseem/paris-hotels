// Input.js (or your Input component file)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/heading.css';

const MainHeading = ({ className, Text }) => {
  return (
    <React.Fragment>
      <h2 className={className}> {Text} </h2>
    </React.Fragment>
  );
};

export default MainHeading;

export const SecondHeading = ({ className, Text }) => {
  return (
    <React.Fragment>
      <h3 className={className}> {Text} </h3>
    </React.Fragment>
  );
};

