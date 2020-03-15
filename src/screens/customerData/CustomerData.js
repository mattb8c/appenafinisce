import React, { useState, useRef } from 'react';
import './CustomerData.css';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import useLoader from '../../utils/useLoader';
import Header from '../../components/Header';
import validator from 'validator';
import { useHistory, useLocation } from "react-router-dom";


function CustomerData() {


  const location = useLocation();
  const business = location.state ? location.state.business : null;
  const history = useHistory();

  const [error, setError] = useState(null);
  const { loader, setLoading } = useLoader(false);

  const [name, setName] = useState('');
  const nameRef = useRef();

  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const [phone, setPhone] = useState('');
  const phoneRef = useRef();

  const [deposit, setDeposit] = useState('');
  const depositRef = useRef();


  function checkErrors() {

    if (name.length === 0) {
      setError({ field: 'name', message: 'Inserisci il tuo nome' });
      nameRef.current.focus();
      return true;
    }

    if (validator.isEmail(email) === false) {
      setError({ field: 'email', message: 'Inserisci un\'email corretta' });
      emailRef.current.focus();
      return true;
    }

    if (validator.isNumeric(parseInt(phone) + '') === false) {
      setError({ field: 'phone', message: 'Inserisci il telefono' });
      phoneRef.current.focus();
      return true;
    }

    if (validator.isNumeric(parseInt(deposit) + '') === false) {
      setError({ field: 'deposit', message: 'Inserisci la cifra che vuoi versare' });
      depositRef.current.focus();
      return true;
    }

    setError(null);
    return false;

  }//checkErrors


  async function doBooking() {

    const errorFound = checkErrors();

    if (errorFound) {
      return;
    }

    setLoading(true);

    const newBooking = {
      businessId: business.id,
      name,
      email,
      phone,
      deposit,
    };

    try {

      const db = firebase.firestore();
      const docRef = await db.collection('businesses').doc(business.id).collection('bookings').add(newBooking);
      newBooking.id = docRef.id;
      
      history.push({
        pathname: '/booking/',
        state: { business, booking: newBooking }
      });

    } catch (error) {

      setLoading(false);
      console.log(error);

    }

  }//doBooking


  function renderBusinessNotFound() {

    if (business == null) {
      return <p className="notFound">Il link non è corretto</p>
    }

  }//renderBusinessNotFound


  function renderBusinessData() {

    if (business == null) {
      return null;
    }

    return <div className="businessActionWrapper">

      <div className="businessDataWrapper">
        <h1 className="name">{business.name}</h1>
        <p>{business.address + ' - ' + business.city + ' (' + business.province.toUpperCase() + ')'}</p>
        <p></p>
        <p>{business.phone}</p>
      </div>

      <Button
        label="Procedi"
        onClick={doBooking} />

    </div>;

  }//renderBusinessData


  function getError(field) {

    if (error === null) {
      return null;
    }

    if (error.field === field) {
      return error.message;
    }

    return null;

  }//getError


  function renderCustomerData() {

    if (business == null) {
      return null;
    }

    return <div className="customerDataWrapper">

      <Header label="I tuoi dati" />

      <div className="fieldsWrapper">
        
        <InputText
          inputRef={nameRef}
          label="Nome"
          value={name}
          setValue={setName}
          error={getError('name')} />

        <InputText
          inputRef={emailRef}
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          error={getError('email')} />

        <InputText
          inputRef={phoneRef}
          type="tel"
          label="Telefono"
          value={phone}
          setValue={setPhone}
          error={getError('phone')} />

        <InputText
          inputRef={depositRef}
          type="number"
          label="Caparra"
          placeholder="Decidi tu la cifra"
          value={deposit}
          setValue={setDeposit}
          error={getError('deposit')} />

      </div>

    </div>;

  }//renderCustomerData


  return (

    <div className="CustomerData">

      {renderBusinessNotFound()}

      <div className="customerWrapper">
        {renderCustomerData()}
      </div>

      {renderBusinessData()}

      {loader}

    </div>
  );

}//CustomerData


export default CustomerData;
