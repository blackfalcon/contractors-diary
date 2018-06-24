import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import 'reset-css';
import './App.css';
import Header from './components/header/Header';
import Splash from './components/splash/Splash';
import PageNotFound from './components/pageNotFound/PageNotFound';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Header auth={auth} provider={provider}/>
          <main className='main-container'>
            <Switch>

              <Route exact path='/' render={() => <Splash auth={auth} />} />
              <Route component={PageNotFound}/>

            </Switch>
          </main>
        </section>
      </Router>
    );
  }
}

export default App;
