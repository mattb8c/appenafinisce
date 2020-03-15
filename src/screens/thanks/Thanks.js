import React from 'react';
import './Thanks.css';
import Button from '../../components/Button';

import { useLocation } from "react-router-dom";
import Header from '../../components/Header';



function Thanks() {


  const location = useLocation();
  const business = location.state ? location.state.business : null;


  function share() {


  }//share


  return (

    <div className="Thanks">

      <Header label="Grazie!" />

      <div className="messageWrapper">
        <p>Contatta “{business.name}” quando l’emergenza sarà finita e <b>concorda con loro data e orario</b> della prenotazione.</p>
        <p>Ti abbiamo mandato <b>un’email</b> riepilogativa.</p>
        <p>Insieme ripartiremo <b>#appenafinisce</b>!</p>
      </div>

      <div className="buttonWrapper">

        <Button
          label="Condividi"
          onClick={share}
          light={true} />

      </div>

    </div>

  );

}//Thanks

export default Thanks;
