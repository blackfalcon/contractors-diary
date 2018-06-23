import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './splash.css';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userImage: ''
    }
  }

  componentDidMount() {
    this.props.auth.onAuthStateChanged((user) => {
      this.setState(() => {

        console.log(user)

        return {
          userName: user ? user.displayName : '',
          userImage: user ? user.photoURL : ''
        };
      });
    });
  }

  render() {
    return (
      <div className='splash-screen'>
        <figure className='user'>
          <img alt='user icon' className='user__icon' src={this.state.userImage}/>
          <figcaption className='user__figcaption'>Hi {this.state.userName.split(' ')[0]}!</figcaption>
          <small>Please select an option below</small>
        </figure>
      </div>
    );
  }
}

export default Splash;
