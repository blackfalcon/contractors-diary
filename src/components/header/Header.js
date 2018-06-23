import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: ''
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log(user ? user.displayName : 'no user data')
      this.setState(() => {
        return {
          isLoggedIn: user ? true : false,
          userName: user ? user.displayName : ''
        };
      });
    });
  }

  signIn = () => {
    auth.signInWithPopup(provider);
  }

  signOut = () => {
    auth.signOut();
  }

  render() {
    return (
      <div>
        {!this.state.isLoggedIn &&
          <p><a href="#signin" onClick={this.signIn}>Sign In</a></p>
        }

        {this.state.isLoggedIn &&
          <p><a href="#signout" onClick={this.signOut}>Welcome {this.state.userName}</a></p>}
      </div>
    );
  }
}

export default Header;
