import React, { useEffect } from 'react';
import './NewBusinessLink.css';
import Header from '../../components/Header';
import { useLocation } from "react-router-dom";
import firebase from '../../config/firebase';
import 'firebase/functions';

import { FacebookShareButton } from "react-share";


function NewBusinessLink() {


  /*useEffect(() => {

    firebase.functions().useFunctionsEmulator('https://6f443dce.ngrok.io');
    console.log('useFunctionsEmulator');

  }, []);*/

  const location = useLocation();
  const businessId = location.state ? location.state.businessId : null;

  const link = "https://appenafinisce.org/b/" + businessId;
  const message = "Non possiamo aprire, ma non vediamo l’ora di avervi di nuovo da noi. Prenotate ora, sosteneteci, e guardiamo insieme al futuro! #appenafinisce";

  if (businessId === null) {
    return null;
  }

  return (

    <div className="NewBusinessLink">

      <Header label="Link" />

      <p className="intro">Ci siamo! <br /> Ecco il tuo <b>link da condividere</b>, mostra i dati della tua attività e consenti ai tuoi clienti di prenotare:</p>

      <div className="contentWrapper">

        <div className="linkWrapper">

          <p className="link"><b>{link}</b></p>

        </div>

        <p><b>Condividilo</b> sui tuoi canali social, ti suggeriamo di aggiungere anche questo <b>messaggio</b>:</p>

        <p className="message">“{message}”</p>

      </div>

      <FacebookShareButton url={link} quote={message} hashtag="#appenafinisce">
        <div className="shareButton">Condividi</div>
      </FacebookShareButton>

    </div>

  );

}//NewBusinessLink

export default NewBusinessLink;
