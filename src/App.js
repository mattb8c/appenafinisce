import React from 'react';
import './App.css';
import Intro from './screens/intro/Intro';
import Results from './screens/results/Results';
import Business from './screens/business/Business';
import Code from './screens/code/Code';
import Thanks from './screens/thanks/Thanks';
import NewBusiness from './screens/newBusiness/NewBusiness';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="container">
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

        </Switch>
      </Router>
    </div>
  );

}//App

export default App;
