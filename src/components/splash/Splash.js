import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './splash.css';

const defaultUser = 'Unknown';
const defaultUserImage = 'http://www.inkwazilearning.co.za/wp-content/uploads/2014/11/user-icon-default.jpg'

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: defaultUser,
      userImage: defaultUserImage
    }
  }

  componentDidMount() {
    this.props.auth.onAuthStateChanged((user) => {
      this.setState(() => {

        console.log(user)

        return {
          userName: user ? user.displayName : defaultUser,
          userImage: user ? user.photoURL : defaultUserImage
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
          {!this.state.userName ?
            <small>Please log in!</small>
            :
            <small>Please select an option below</small>
          }
        </figure>
      </div>
    );
  }
}

export default Splash;
