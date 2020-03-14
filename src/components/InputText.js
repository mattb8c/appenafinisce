import React from 'react';
import './InputText.css';

function InputText({ inputRef, label, value, maxLength, setValue, onEnter, type = 'text', placeholder = '', error = null }) {


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


  function renderError() {

    if (error === null){
      return null;
    }

    return <p className="error">{error}</p>;

  }//renderError


  return (
    <div className="InputText" >

      <p className="label"><b>{label}</b></p>

      <input
        ref={inputRef}
        className={error != null ? 'errorInput' : ''}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        maxLength={maxLength} />

      {renderError()}

    </div>
  );

}//InputText

export default InputText;
