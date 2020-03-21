import React from 'react';
import './Thanks.css';
import ShareButton from '../../components/ShareButton';
import { useLocation } from "react-router-dom";
import Header from '../../components/Header';


function Thanks() {


  const location = useLocation();
  const business = location.state ? location.state.business : null;

  const shareLink = "https://appenafinisce.org";
  const shareMessage = "Ho appena prenotato in una delle mie attività preferite. #appenafinsice è un progetto nato per iniziare a pensare al futuro, per sostenere l'economia e per dimostrare che torneremo alle nostre vite più forti e uniti di prima. Partecipa anche tu: https://www.facebook.com/appenafinisce";

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
