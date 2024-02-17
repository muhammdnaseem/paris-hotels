    
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/button.css';
const Button = (props) => {
  return (
    <div>
        
                <button 
                type="button" 
              className={`book-a-table-btn ${props.className}`}
 
                id={props.id}
                >
                {props.text}
                <i class={`fa ${props.iconClass}`}></i>
                </button>
        
    </div>
  );
};

export default Button;
