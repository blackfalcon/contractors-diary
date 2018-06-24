import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const defaultUserImage = 'http://www.inkwazilearning.co.za/wp-content/uploads/2014/11/user-icon-default.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: '',
      userImage: defaultUserImage
    }
  }

  componentDidMount() {
    this.props.auth.onAuthStateChanged((user) => {
      this.setState(() => {
        //console.log(user)
        return {
          isLoggedIn: user ? true : false,
          userName: user ? user.displayName : '',
          userImage: user ? user.photoURL : defaultUserImage
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
        <div className='site-header__title'>
          <Link to='/'>The Contractor's Diary</Link>
        </div>

        <div className='site-header__auth'>
          {!this.state.isLoggedIn &&
            <div className='site-header__loggedOut' onClick={this.signIn}>
              <img alt='user icon' className='site-header__user-icon' src={this.state.userImage}/>
              <p>Sign In</p>
            </div>
          }

          {this.state.isLoggedIn &&
            <div className='site-header__loggedIn' onClick={this.signOut}>
              <img alt='user icon' className='site-header__user-icon' src={this.state.userImage}/>
              <a href='/'>Sign out</a>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Header;
