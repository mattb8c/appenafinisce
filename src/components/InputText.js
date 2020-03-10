import React from 'react';
import './InputText.css';

function InputText({ label, value, setValue, onEnter, type = 'text', placeholder = '' }) {


  function onChange(event) {

    const value = event.target.value;
    if (setValue) {
      setValue(value);
    }

  }//onChange


  function onKeyDown(event) {

    if (event.key === "Enter" && onEnter) {
      onEnter();
    }

  }//onKeyDown


  return (
    <div className="InputText" >

      <p>{label}</p>

      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder} />

    </div>
  );

}//InputText

export default InputText;
