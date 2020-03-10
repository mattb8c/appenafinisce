import React, { useState, useEffect } from 'react';
import './Button.css';



function Button({ label, onClick }) {

  return (
    <button className="Button" onClick={onClick} >
      {label}
    </button>
  );

}//InputText

export default Button;
