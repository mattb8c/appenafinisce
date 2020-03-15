import React from 'react';
import './Intro.css';
import Button from '../../components/Button';

import { useHistory } from "react-router-dom";
import ProjectInfo from '../../components/ProjectInfo';



function Intro() {


  const history = useHistory();


  function openNewBusiness() {

    history.push({
      pathname: '/newBusiness/',
    });

  }//openNewBusiness


  function share() {


  }//share


  return (

    <div className="Intro">

      <ProjectInfo />

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
