import React from 'react';
import './App.css';
import Intro from './screens/intro/Intro';
import Results from './screens/results/Results';
import Business from './screens/business/Business';
import Code from './screens/code/Code';
import Thanks from './screens/thanks/Thanks';
import NewBusiness from './screens/newBusiness/NewBusiness';
import NewBusinessCheck from './screens/newBusinessCheck/NewBusinessCheck';
import NewBusinessLink from './screens/newBusinessLink/NewBusinessLink';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
      <Router>
        <Switch>

          <Route exact path="/">
            <Intro />
          </Route>

          <Route exact path="/results/">
            <Results />
          </Route>

          <Route exact path="/business/:id">
            <Business />
          </Route>

          <Route exact path="/code/">
            <Code />
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

export default App;
