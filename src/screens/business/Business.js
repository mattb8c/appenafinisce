import React, { useState, useEffect } from 'react';
import './Business.css';
import texts from '../../config/texts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import { useParams, useHistory, useLocation } from "react-router-dom";
import useLoader from '../../utils/useLoader';


function Business() {

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  const {loader, loading, setLoading} = useLoader(true);

  const [business, setBusiness] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();


  //id
  useEffect(() => {

    async function loadData(id) {

      const db = firebase.firestore();
      const snapshot = await db.collection('business').doc(id).get();
      const businessData = snapshot.data();
      if(businessData){
        businessData.id = snapshot.id;
      }

      setBusiness(businessData);
      setLoading(false);

    }//loadData

    loadData(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  //state
  useEffect(() => {

    if (location.state) {
      setBusiness(location.state.businessData);
      setLoading(false);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);



  async function openCode() {

    const db = firebase.firestore();
    const docRef = await db.collection('business').doc(business.id).collection('bookings').add({
      businessId: business.id,
      name,
      email,
      phone
    });

    const bookingId = docRef.id;

    history.push({
      pathname: '/code/',
      state: { business, bookingId }
    });

  }//openCode

  
  function renderBusinessData() {

    return <div className="businessDataWrapper">

      <h1>{business.name}</h1>

      <p className="data" >{business.address + ' - ' + business.city + ' (' + business.province + ') - ' + business.zipCode}</p>
      <p className="data">{business.phone}</p>

    </div>;

  }//renderBusinessData
  

  if (loading) {
    return loader;
  }

  if(business == null){
    return <p>Non trovato</p>;
  }

  return (
    <div className="Business">

      {renderBusinessData()}

      <div className="dataWrapper">

        <p className="callToAction">{texts['business_call_to_action_1']}</p>

        <InputText
          label="Nome"
          value={name}
          setValue={setName} />

        <InputText
          type="email"
          label="Email"
          value={email}
          setValue={setEmail} />

        <InputText
          type="tel"
          label="Telefono"
          value={phone}
          setValue={setPhone} />

      </div>

      <Button
        label="Prendi il tuo codice prenotazione"
        onClick={openCode} />

    </div>
  );

}//Business


export default Business;
