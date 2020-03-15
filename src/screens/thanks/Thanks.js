import React from 'react';
import './Thanks.css';
import ShareButton from '../../components/ShareButton';
import { useLocation } from "react-router-dom";
import Header from '../../components/Header';


function Thanks() {


  const location = useLocation();
  const business = location.state ? location.state.business : null;

  const shareLink = "https://appenafinisce.org";
  const shareMessage = "Ho appena prenotato in uno dei posti in cui non vedo l'ora di tornare. Quando ci andrò? #appenafinisce \n Condividi il progetto con chi ha un'attività chiusa in questo momento di emergenza, sosteniamo l'economia e proiettiamoci al futuro!";

  return (

    <div className="Thanks">

      <Header label="Grazie!" />

      <div className="messageWrapper">
        <p>Contatta “{business.name}” quando l’emergenza sarà finita e <b>concorda con loro data e orario</b> della prenotazione.</p>
        <p>Ti abbiamo mandato <b>un’email</b> riepilogativa.</p>
        <p>Insieme ripartiremo <b>#appenafinisce</b>!</p>
      </div>

      <ShareButton link={shareLink} message={shareMessage} />

    </div>

  );

}//Thanks

export default Thanks;
