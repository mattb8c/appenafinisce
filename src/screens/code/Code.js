import React, { useState, useEffect } from 'react';
import './Code.css';
import texts from '../../config/texts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import firebase from '../../config/firebase';
import 'firebase/firestore';

import { Link, useParams, useHistory, useLocation } from "react-router-dom";


function Code() {

  const location = useLocation();
  const business = location.state.business;
  const bookingId = location.state.bookingId;
  const history = useHistory();


  async function openThanks() {

    const db = firebase.firestore();
    await db.collection('business').doc(business.id).collection('bookings').doc(bookingId).set({
      paymentConfirmed: true
    }, { merge: true });

    history.push({
      pathname: '/thanks',
      state: {}
    });

  }//openThanks


  if (business == null || bookingId == null) {
    return null;
  }


  return (
    <div className="Code">

      <h1>Ci siamo!</h1>
      <p>Fai sapere a {business.name} che appena finisce tornerai da loro.</p>

      <div className="content">

        <p>Fai un bonifico, con un acconto, per una prenotazione futura, questi sono i dati:</p>

        <div className="dataWrapper">
          <p><b>Intestatato a: </b>{business.name}</p>
          <p><b>IBAN: </b>{business.iban}</p>
        </div>

        <p>E inserisci questo codice nella causale, così sapranno come riconoscerti:</p>

        <p><b>Causale: </b>{bookingId}</p>

      </div>

      <Button
        label="Ho effettuato il bonifico"
        onClick={openThanks} />

    </div>
  );

}//Code

export default Code;
