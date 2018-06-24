import React, { Component } from 'react';
import firebase from 'firebase';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: '',
      userImage: ''
    }
  }

  componentDidMount() {
    this.props.auth.onAuthStateChanged((user) => {
      this.setState(() => {

        console.log(user)

        return {
          isLoggedIn: user ? true : false,
          userName: user ? user.displayName : '',
          userImage: user ? user.photoURL : ''
        };
      });
    });
  }

  signIn = () => {
    this.props.auth.signInWithRedirect(this.props.provider);
  }

  signOut = () => {
    this.props.auth.signOut();
  }

  render() {
    return (
      <div className='site-header'>
        <div className='site-header__title'>The Contractor's Diary</div>

        <div className='site-header__auth'>
          {!this.state.isLoggedIn &&
            <a href='#' onClick={this.signIn}>Sign In</a>
          }

          {this.state.isLoggedIn &&
            <div className='site-header__loggedIn'>
              <img alt='user icon' className='site-header__user-icon' src={this.state.userImage}/>
              <a href='#' onClick={this.signOut}>Sign out</a>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Header;
