import React, { useState } from 'react';
import './Intro.css';
import texts from '../../config/texts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



function Intro() {


  const [input, setInput] = useState('');
  const history = useHistory();


  function search() {

    const clearedInput = input.replace(/\s/g, '').toLowerCase();

    history.push({
      pathname: '/results/',
      state: { input: clearedInput }
    });

  }//search


  return (
    <div className="Intro">

      <h3>{texts['intro_1']}</h3>

      <h3>{texts['intro_2']}</h3>

      <div className='ContentWrapper'>

        <InputText
          label="Cerca la tua attività preferita"
          value={input}
          setValue={setInput}
          onEnter={search} />

        <Button 
          label="Cerca"
          onClick={search} />

      </div>

      <Link className="Link" to="/newBusiness">Aggiungi la tua attività</Link>

    </div>
  );

}//Intro

export default Intro;
