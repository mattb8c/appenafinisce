import React from 'react';
import './Intro.css';
import Button from '../../components/Button';

import { useHistory } from "react-router-dom";
import ProjectInfo from '../../components/ProjectInfo';
import ShareButton from '../../components/ShareButton';



function Intro() {


  const history = useHistory();

  const shareLink = "https://appenafinisce.org";
  const shareMessage = "Condividi questo progetto con chi ha un'attività chiusa in questo momento di emergenza, sosteniamo l'economia e proiettiamoci al futuro!";


  function openNewBusiness() {

    history.push({
      pathname: '/newBusiness/',
    });

  }//openNewBusiness


  return (

    <div className="Intro">

      <ProjectInfo />

      <div className="buttonWrapper">

        <Button
          label="Aggiungi la tua attività"
          onClick={openNewBusiness} />

        <ShareButton link={shareLink} message={shareMessage} />

        <p className="questions">Hai domande? Contattaci su <a target="__BLANK" href="https://www.facebook.com/appenafinisce/">Facebook</a></p>

      </div>

    </div>

  );

}//Intro

export default Intro;
