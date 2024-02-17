// InputField.js
import React from 'react';
import '../css/inputfield.css';



const InputField = ({ type, name, id, placeholder, required }) => {
  return (
    <div className="form-group mt-3">
      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
