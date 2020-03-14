import React, { useState } from 'react';
import './Intro.css';
import Button from '../../components/Button';

import { useHistory } from "react-router-dom";



function Intro() {


  const [moreVisible, setMoreVisible] = useState(false);

  const history = useHistory();


  function openNewBusiness() {

    history.push({
      pathname: '/newBusiness/',
    });

  }//openNewBusiness


  function share() {


  }//share


  function showMore() {

    setMoreVisible(!moreVisible);

  }//showMore


  function renderMore() {

    if (moreVisible === false) {
      return null;
    }

    return <div>

      <p>• ogni attività commerciale può creare una propria pagina che permetterà a chiunque di prenotare un bene o un servizio nel prossimo fututo, <b>pagando ora una caparra</b>.</p>

      <p>• La caparra si paga <b>tramite bonifico, senza intermediari</b>, direttamente sul conto dell’attività commerciale.</p>

      <p>• al termine dell’emergenza, ci si accorderà per <b>data e ora</b> della prenotazione.</p>

    </div>;

  }//renderMore


  return (

    <div className="Intro">

      <div className="contentWrapper">

        <h1>#appenafinisce</h1>

        <p>Questo progetto nasce per due motivi: </p>

        <p>• per <b>sostenere le attività commerciali</b> che sono costrette a chiudere per l’emergenza covid19.</p>

        <p>• per <b>guardare insieme al futuro</b> e affermare che torneremo ad affollare i nostri luoghi e negozi preferiti.</p>

        <p className="more" onClick={showMore}>Come funziona?</p>

        {renderMore()}

      </div>

      <div className="buttonWrapper">

        <Button
          label="Aggiungi la tua attività"
          onClick={openNewBusiness} />

        <Button
          label="Condividi"
          onClick={share}
          light={true} />

      </div>

    </div>

  );

}//Intro

export default Intro;
