import React, { useState, useRef } from 'react';
import './NewBusiness.css';
import 'firebase/firestore';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Header from '../../components/Header';
import validator from 'validator';
import ibanValidator from 'iban';
import { useHistory, useLocation } from "react-router-dom";


function NewBusiness() {

  const [error, setError] = useState(null);

  const location = useLocation();
  const business = location.state ? location.state.business : null;

  const [name, setName] = useState(business ? business.name : '');
  const nameRef = useRef();

  const [address, setAddress] = useState(business ? business.address : '');
  const addressRef = useRef();

  const [city, setCity] = useState(business ? business.city : '');
  const cityRef = useRef();

  const [province, setProvince] = useState(business ? business.province : '');
  const provinceRef = useRef();

  const [zipCode, setZipCode] = useState(business ? business.zipCode : '');
  const zipCodeRef = useRef();

  const [phone, setPhone] = useState(business ? business.phone : '');
  const phoneRef = useRef();

  const [email, setEmail] = useState(business ? business.email : '');
  const emailRef = useRef();

  const [bankTransferHolder, setBankTransferHolder] = useState(business ? business.bankTransferHolder : '');
  const bankTransferHolderRef = useRef();

  const [iban, setIban] = useState(business ? business.iban : '');
  const ibanRef = useRef();

  const history = useHistory();


  function back() {

    history.goBack();

  }//back


  function checkErrors() {

    if (name.length === 0) {
      setError({ field: 'name', message: 'Inserisci il nome dell\'attività' });
      nameRef.current.focus();
      return true;
    }

    if (address.length === 0) {
      setError({ field: 'address', message: 'Inserisci l\'indirizzo' });
      addressRef.current.focus();
      return true;
    }

    if (city.length === 0) {
      setError({ field: 'city', message: 'Inserisci la città' });
      cityRef.current.focus();
      return true;
    }

    if (province.length !== 2) {
      setError({ field: 'province', message: 'Inserisci la provincia' });
      provinceRef.current.focus();
      return true;
    }

    if (validator.isNumeric(zipCode) === false || zipCode.length !== 5) {
      setError({ field: 'zipCode', message: 'Inserisci il cap' });
      zipCodeRef.current.focus();
      return true;
    }

    if (validator.isNumeric(parseInt(phone) + '') === false) {
      setError({ field: 'phone', message: 'Inserisci il telefono' });
      phoneRef.current.focus();
      return true;
    }

    if (validator.isEmail(email) === false) {
      setError({ field: 'email', message: 'Inserisci un\'email corretta' });
      emailRef.current.focus();
      return true;
    }

    if (bankTransferHolder.length === 0) {
      setError({ field: 'bankTransferHolder', message: 'Inserisci l\'intestatario del bonifico' });
      bankTransferHolderRef.current.focus();
      return true;
    }

    if (ibanValidator.isValid(iban) === false) {
      setError({ field: 'iban', message: 'Inserisci un IBAN corretto' });
      ibanRef.current.focus();
      return true;
    }

    setError(null);
    return false;

  }//checkErrors


  function createBusiness() {

    const errorFound = checkErrors();

    if (errorFound) {
      return;
    }

    const newBusiness = {
      name,
      address,
      city,
      province,
      zipCode,
      phone,
      email,
      bankTransferHolder,
      iban,
    };

    history.replace({
      pathname: '/newBusinessCheck/',
      state: { business: newBusiness },
    });

  }//createBusiness


  function getError(field) {

    if (error === null) {
      return null;
    }

    if (error.field === field) {
      return error.message;
    }

    return null;

  }//getError


  return (

    <div className="NewBusiness">

      <Header showBack={true} label="Nuova attività" onBack={back} />

      <p className="intro">
        Inserisci i tuoi dati. Riceverai un <b>link</b> da condividere con i tuoi clienti per farli partecipare e farli proiettare al futuro insieme a te.
        <br/><br/>
        Ti arriverà <b>un'email</b> per ogni prenotazione effettuata con i dati del cliente e il suo <b>codice prenotazione</b>.
        <br/><br/>
        Quando l'emergenza sarà finita ti contatteranno per concordare data e ora.
      </p>

      <div className="dataWrapper">

        <InputText
          inputRef={nameRef}
          type="text"
          label="Nome attività"
          value={name}
          setValue={setName}
          error={getError('name')} />

        <InputText
          inputRef={addressRef}
          type="text"
          label="Indirizzo"
          value={address}
          setValue={setAddress}
          error={getError('address')} />

        <InputText
          inputRef={cityRef}
          type="text"
          label="Città"
          value={city}
          setValue={setCity}
          error={getError('city')} />

        <InputText
          inputRef={provinceRef}
          type="text"
          label="Provincia"
          maxLength={2}
          value={province}
          setValue={setProvince}
          error={getError('province')} />

        <InputText
          inputRef={zipCodeRef}
          type="text"
          label="Cap"
          maxLength={5}
          value={zipCode}
          setValue={setZipCode}
          error={getError('zipCode')} />

        <InputText
          inputRef={phoneRef}
          type="tel"
          label="Telefono"
          value={phone}
          setValue={setPhone}
          error={getError('phone')} />

        <InputText
          inputRef={emailRef}
          type="email"
          removeSpaces={true}
          label="Email"
          value={email}
          setValue={setEmail}
          error={getError('email')} />

        <InputText
          inputRef={bankTransferHolderRef}
          type="text"
          label="Intestatario bonifico"
          value={bankTransferHolder}
          setValue={setBankTransferHolder}
          error={getError('bankTransferHolder')} />

        <InputText
          inputRef={ibanRef}
          type="text"
          label="IBAN"
          value={iban}
          setValue={setIban}
          error={getError('iban')} />

      </div>

      <Button
        label="Crea attività"
        onClick={createBusiness} />

    </div>
  );

}//NewBusiness

export default NewBusiness;
