import React, { Component } from 'react';
import firebase from 'firebase';
import 'reset-css';
import './App.css';
import Header from './components/header/Header';
import Splash from './components/splash/Splash';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
  render() {
    return (
      <main>
        <Header auth={auth} provider={provider}/>

        <Splash auth={auth} />
      </main>
    );
  }
}

export default App;
