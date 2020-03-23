import React from 'react';
import './Button.css';



function Button({ label, onClick, light }) {

  const className = light ? 'Button light' : 'Button normal';

  return (
    <button className={className} onClick={onClick} >
      {label}
    </button>
  );

}//Button

export default Button;
