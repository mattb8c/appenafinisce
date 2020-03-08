import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//import app from 'firebase/app';
import firebase from './config/firebase';
import 'firebase/firestore';

function App() {

  useEffect(()=>{

    const db = firebase.firestore();
    db.collection('test').add({a: 'b'});  

  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
