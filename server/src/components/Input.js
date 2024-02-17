import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap CSS

function Input(props) {
  return (
    <div className={`form-outline mb-4 ${props.className}`}>
      <input
        type={props.type}
        id={props.id}
        className="form-control form-control-lg"
        placeholder={props.placeholder}
      />
      <label className="form-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default Input;
