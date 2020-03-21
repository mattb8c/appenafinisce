import React from 'react';
import './Booking.css';
import Button from '../../components/Button';
import Header from '../../components/Header';
import CopyableText from '../../components/CopyableText';
import useLoader from '../../utils/useLoader';
import { useLocation, useHistory } from "react-router-dom";
import firebase from '../../config/firebase';
import 'firebase/functions';


function Booking() {

  
  const location = useLocation();
  const business = location.state ? location.state.business : null;
  const booking = location.state ? location.state.booking : null;
  const history = useHistory();

  const { loader, setLoading } = useLoader(false);


  async function confirmPayment() {

    setLoading(true);

    const confirmBooking = firebase.functions().httpsCallable('confirmBooking');

    try {

      const response = await confirmBooking({ business, booking });

      if (response.data.done) {

        history.replace({
          pathname: '/thanks/',
          state: { business },
        });

      }

    } catch (error) {

      setLoading(false);
      console.log(error);

    }

  }//confirmPayment


  function renderBusinessNotFound() {

    if (business == null || booking == null) {
      return <p className="notFound">Il link non è corretto</p>
    }

  }//renderBusinessNotFound


  function renderPaymentData() {

    if (business == null || booking == null) {
      return null;
    }

    return <div className="paymentDataWrapper">

      <Header label="Bonifico" />

      <p>Conferma <b>ORA</b> la tua prenotazione, effettua il bonifico di <b>{booking.deposit} €</b>.</p>

      <p className="holderLabel">Intestato a:</p>
      <CopyableText label={business.bankTransferHolder} />

      <p className="fieldLabel">IBAN:</p>
      <CopyableText label={business.iban} />

      <p className="fieldLabel">Causale:</p>
      <CopyableText label={"Codice caparra - " + booking.id} />

    </div>;

  }//renderCustomerData


  function renderBusinessData() {

    if (business == null || booking == null) {
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
        label="Bonifico fatto"
        onClick={confirmPayment} />

    </div>;

  }//renderBusinessData


  return (

    <div className="Booking">

      {renderBusinessNotFound()}

      {renderPaymentData()}

      {renderBusinessData()}

      {loader}

    </div>
  );

}//Booking


export default Booking;
