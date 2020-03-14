import React from 'react';
import './Header.css';
import backIcon from '../assets/images/back.png';



function Header({ label, showBack, onBack }) {


  function renderBack() {

    if (showBack !== true) {
      return null;
    }

    return <img onClick={onBack} src={backIcon} alt="back" />;

  }//renderBack


  return (
    <div className="Header">
      {renderBack()}
      <h1>{label}</h1>
    </div>
  );

}//Header

export default Header;
