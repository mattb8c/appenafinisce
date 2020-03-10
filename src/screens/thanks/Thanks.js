import React, { useState, useEffect } from 'react';
import './Thanks.css';
import texts from '../../config/texts';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import firebase from '../../config/firebase';
import 'firebase/firestore';

import { Link, useParams, useHistory, useLocation } from "react-router-dom";


function Thanks() {

  return (
    <div className="Thanks">

      <h1>Thanks</h1>

    </div>
  );

}//Thanks

export default Thanks;
