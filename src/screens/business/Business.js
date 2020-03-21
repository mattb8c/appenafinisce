import React, { useState, useEffect } from 'react';
import './Business.css';
import Button from '../../components/Button';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import { useParams } from "react-router-dom";
import useLoader from '../../utils/useLoader';
import ProjectInfo from './BusinessProjectInfo';
import { useHistory } from "react-router-dom";


function Business() {


  const { id } = useParams();
  const history = useHistory();

  const { loader, loading, setLoading } = useLoader(true);

  const [business, setBusiness] = useState();


  //id
  useEffect(() => {

    async function loadData(id) {

      const db = firebase.firestore();
      const snapshot = await db.collection('businesses').doc(id).get();
      const businessData = snapshot.data();
      if (businessData) {
        businessData.id = snapshot.id;
      }

      setBusiness(businessData);
      setLoading(false);

    }//loadData

    if (id) {
      loadData(id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  function startBooking() {

    history.push({
      pathname: '/customerData/',
      state: { business },
    });

  }//startBooking


  function renderBusinessNotFound() {

    if (loading === false && business == null) {
      return <p className="notFound">Il link non è corretto</p>
    }

  }//renderBusinessNotFound


  function renderBusinessData() {

    if (loading || !business) {
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
        label="Prenota"
        onClick={startBooking} />

    </div>;

  }//renderBusinessData


  function renderInfo() {

    if (loading || !business) {
      return null;
    }

    return <ProjectInfo />;

  }//renderInfo


  return (

    <div className="Business">

      {renderBusinessNotFound()}

      <div className="infoWrapper">
        {renderInfo()}
      </div>

      {renderBusinessData()}

      {loader}

    </div>
  );

}//Business


export default Business;
