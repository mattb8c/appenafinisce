import React from 'react';
import './Intro.css';
import Button from '../../components/Button';

import { useHistory } from "react-router-dom";
import ProjectInfo from '../../components/ProjectInfo';
import ShareButton from '../../components/ShareButton';



function Intro() {


  const history = useHistory();

  const shareLink = "https://appenafinisce.org";
  const shareMessage = "Ho appena prenotato in uno dei posti in cui non vedo l'ora di tornare. Quando ci andrò? #appenafinisce \n Condividi il progetto con chi ha un'attività chiusa in questo momento di emergenza, sosteniamo l'economia e proiettiamoci al futuro!";


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

      </div>

    </div>

  );

}//Intro

export default Intro;
