import React from 'react';
import './NewBusinessLink.css';
import Header from '../../components/Header';
import { useLocation } from "react-router-dom";
import ShareButton from '../../components/ShareButton';
import CopyableText from '../../components/CopyableText';


function NewBusinessLink() {

  const location = useLocation();
  const businessId = location.state ? location.state.businessId : null;

  const link = "https://appenafinisce.org/b/" + businessId;
  const message = "#appenafinsice è un progetto nato per iniziare a pensare al futuro e sostenere l'economia. Partecipa con noi, insieme andiamo avanti. A presto!";

  if (businessId === null) {
    return null;
  }

  return (

    <div className="NewBusinessLink">

      <Header label="Link" />

      <p className="intro">Ci siamo! <br /> Ecco il tuo <b>link da condividere</b>, (ti abbiamo anche inviato un'email).<br/>Mostra i dati della tua attività e consenti ai tuoi clienti di prenotare:</p>

      <div className="contentWrapper">

        <CopyableText label={link} />

        <p><b>Condividilo</b> sui tuoi canali social, ti suggeriamo di aggiungere anche questo <b>messaggio</b>:</p>

        <CopyableText label={message} />

      </div>

      <ShareButton link={link} message={message} />

    </div>

  );

}//NewBusinessLink

export default NewBusinessLink;
