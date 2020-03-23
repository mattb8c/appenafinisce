import React, { useState } from 'react';
import './ProjectInfo.css';
import logo from '../../assets/images/logo.png';



function ProjectInfo() {


  var [howJoinVisible, setHowJoinVisible] = useState(false);
  var [howWorkVisible, setHowWorkVisible] = useState(false);


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

    return <div className="toolTip">

      <p>• Hai un'attività? Aggiungila e condividi il progetto con i tuoi clienti e i tuoi colleghi. Trasmetti i valori del progetto, rendilo possibile!</p>

      <p>• Vuoi prenotare un'attività? Condividi con i gestori questo progetto, rendili partecipi e potrai prenotare.</p>

    </div>;
	
	  

  }//renderHowJoin


  function renderHowWork() {

    if (howWorkVisible === false) {
      return null;
    }

    return <div className="toolTip">

      <p>L'attività condivide i propri dati. I clienti effettuano un bonifico direttamente all'attività e ricevono un codice prenotazione che useranno appena sarà finita l'emergenza.</p>

    </div>;
	  

  }//renderHowWork


  return (

    <div className="ProjectInfo">

      <img src={logo} alt="Logo" class="logo" />
	  
	  <h1>#appenafinisce</h1>
	
	  <div className="info">
	  <p>Questo progetto nasce per prenotare ora qualcosa che faremo #appenafinisce. </p>

      <p>Non possiamo risolvere tutti i problemi di chi ha un'attività che deve restare chiusa.</p>
      <p>Ma possiamo unirci nell'attesa e nella speranza, dimostrando che torneremo alle nostre vite più forti e uniti di prima.</p>

      <p className="more" onClick={showHowJoin}>Come partecipare?</p>
      {renderHowJoin()}

      <p className="more" onClick={showHowWork}>Come funziona?</p>
      {renderHowWork()}
	  


       </div>

    </div>

  );

}//ProjectInfo

export default ProjectInfo;
