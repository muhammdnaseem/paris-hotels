// Input.js (or your Input component file)
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({ type, id, className, placeholder, label, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
