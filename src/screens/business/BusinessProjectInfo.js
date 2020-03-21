import React, { useState } from 'react';
import './BusinessProjectInfo.css';



function BusinessProjectInfo() {


  const [moreVisible, setMoreVisible] = useState(false);


  function showMore() {

    setMoreVisible(!moreVisible);

  }//showMore


  function renderMore() {

    if (moreVisible === false) {
      return null;
    }

    return <div>

      <p>• Ogni attività commerciale può creare una propria pagina che permetterà a chiunque di prenotare un bene o un servizio nel prossimo fututo, <b>pagando ora una caparra</b>.</p>

      <p>• La caparra si paga <b>tramite bonifico, senza intermediari</b>, direttamente sul conto dell’attività commerciale.</p>

      <p>• Al termine dell’emergenza, ci si accorderà per <b>data e ora</b> della prenotazione.</p>

    </div>;

  }//renderMore


  return (

    <div className="BusinessProjectInfo">

        <h1>#appenafinisce</h1>

        <p>Questo progetto nasce per due motivi: </p>

        <p>• per <b>sostenere le attività commerciali</b> che sono costrette a chiudere per l’emergenza covid-19.</p>

        <p>• per <b>guardare insieme al futuro</b> e affermare che torneremo ad affollare i nostri luoghi e negozi preferiti.</p>

        <p className="more" onClick={showMore}>Come funziona?</p>

        {renderMore()}

    </div>

  );

}//BusinessProjectInfo

export default BusinessProjectInfo;
