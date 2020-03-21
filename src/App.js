import React, { useEffect } from 'react';
import './App.css';
import Intro from './screens/intro/Intro';
import Business from './screens/business/Business';
import CustomerData from './screens/customerData/CustomerData';
import Booking from './screens/booking/Booking';
import Thanks from './screens/thanks/Thanks';
import NewBusiness from './screens/newBusiness/NewBusiness';
import NewBusinessCheck from './screens/newBusinessCheck/NewBusinessCheck';
import NewBusinessLink from './screens/newBusinessLink/NewBusinessLink';
import firebase from './config/firebase';
import 'firebase/functions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";


function App() {

  useEffect(() => {

    firebase.functions().useFunctionsEmulator('https://08fc984a.ngrok.io');
    console.log('useFunctionsEmulator');

  }, []);

  return (
    <Router>

      <ScrollToTop />

      <Switch>

        <Route exact path="/">
          <Intro />
        </Route>

        <Route exact path="/b/:id">
          <Business />
        </Route>

        <Route exact path="/business/:id">
          <Business />
        </Route>

        <Route exact path="/customerData/">
          <CustomerData />
        </Route>

        <Route exact path="/booking/">
          <Booking />
        </Route>

        <Route exact path="/thanks/">
          <Thanks />
        </Route>

        <Route exact path="/newBusiness/">
          <NewBusiness />
        </Route>

        <Route exact path="/newBusinessCheck/">
          <NewBusinessCheck />
        </Route>

        <Route exact path="/newBusinessLink/">
          <NewBusinessLink />
        </Route>

      </Switch>
    </Router>
  );

}//App


function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;

}//ScrollToTop

export default App;
