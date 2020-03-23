import React, { useState } from 'react';
import './BusinessProjectInfo.css';



function BusinessProjectInfo({ business }) {


  const [howJoinVisible, setHowJoinVisible] = useState(false);
  const [howWorkVisible, setHowWorkVisible] = useState(false);


  function showHowJoin() {

    setHowJoinVisible(!howJoinVisible);

  }//showHowJoin


  function showHowWork() {

    setHowWorkVisible(!howWorkVisible);

  }//showHowWork


  function renderHowJoin() {

    if (howJoinVisible === false) {
      return null;
    }

    return <div>

      <p>Iniziamo di nuovo a prenotare le nostre attività preferite!</p>

      <p>Paghiamo ora una caparra, sosteniamo l'economia e cominciamo a pensare al futuro.</p>

    </div>;

  }//renderHowJoin


  function renderHowWork() {

    if (howWorkVisible === false) {
      return null;
    }

    return <div>

      <p>Inserisci i tuoi dati, riceverai le informazioni per effettuare il bonifico e il tuo codice prenotazione. Quando l'emergenza sarà finita contatta la struttura per concordare data e ora.</p>

    </div>;

  }//renderHowWork


  return (

    <div className="BusinessProjectInfo">

      <h1>#appenafinisce</h1>

      <p>{business.name} partecipa al progetto #appenafinise. </p>

      <p>
        Il progetto nasce dalla voglia di proiettarsi al futuro e di dimostrare che questa emergenza finirà.
        <br />
        Vogliamo unirci nell'attesa e nella speranza, dimostrando che torneremo alle nostre vite più forti e uniti di prima.
      </p>

      <p className="more" onClick={showHowJoin}>Come funziona?</p>
      {renderHowJoin()}

      <p className="more" onClick={showHowWork}>Cosa devo fare?</p>
      {renderHowWork()}

    </div>

  );

}//BusinessProjectInfo

export default BusinessProjectInfo;
