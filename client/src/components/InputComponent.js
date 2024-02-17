import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/InputComponent.css';

const InputComponent = ({ type, id, className, placeholder, label, onChange }) => {
  return (
    <div>
      <div className="col-lg-4 col-md-6 form-group">
        <input
          type={type}
          name={id}
          className={`form-control ${className}`}
          id={id}
          placeholder={placeholder}
    
          data-rule="minlen:4"
          data-msg={`Please enter at least 4 chars for ${label}`}
        />
        <div className="validate"></div>
      </div>
    </div>
  );
};

export default InputComponent;
