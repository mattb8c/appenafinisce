import React, { useState, useEffect, useRef } from 'react';
import './NewBusinessCheck.css';
import Button from '../../components/Button';
import Header from '../../components/Header';
import useLoader from '../../utils/useLoader';
import { useHistory, useLocation } from "react-router-dom";
import firebase from '../../config/firebase';
import 'firebase/functions';


function NewBusinessCheck() {


  useEffect(() => {

    firebase.functions().useFunctionsEmulator('https://6f443dce.ngrok.io');
    console.log('useFunctionsEmulator');

  }, []);


  const { loader, setLoading } = useLoader(false);

  const location = useLocation();
  const business = location.state ? location.state.business : null;

  const history = useHistory();

  if (business === null) {
    return null;
  }


  function editBusiness() {

    history.replace({
      pathname: '/newBusiness/',
      state: { business },
    });

  }//editBusiness


  async function confirm() {

    setLoading(true);

    const createBusiness = firebase.functions().httpsCallable('createBusiness');

    try {

      const response = await createBusiness({ business });

      if (response.data.businessId) {
        
        history.replace({
          pathname: '/newBusinessLink/',
          state: { businessId :  response.data.businessId},
        });

      }

    } catch (error) {

      setLoading(false);
      console.log(error);

    }

  }//confirm


  return (

    <div className="NewBusinessCheck">

      <Header label="Conferma" />

      <p className="intro">Ecco i dati che hai inserito, <b>controllali attentamente</b>. Se sono corretti conferma e riceverai il tuo link di condivisione.</p>

      <div className="contentWrapper">

        <div className="dataWrapper">

          <p className="info"><b>{business.name}</b></p>
          <p>{business.address} - {business.city}</p>
          <p>{business.zipCode} - {business.province}</p>
          <p>{business.phone}</p>
          <p className="info">{business.email}</p>
          <p>{business.bankTransferHolder}</p>
          <p>{business.iban}</p>

        </div>

      </div>

      <Button
        label="Conferma"
        onClick={confirm} />

      <Button
        label="Modifica"
        light={true}
        onClick={editBusiness} />

      {loader}

    </div>
  );

}//NewBusinessCheck

export default NewBusinessCheck;
