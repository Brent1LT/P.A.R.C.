import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
    this.logout = this.logout.bind(this);
    this.loggedInCheck = this.loggedInCheck.bind(this);
  }

  handleEvent(e) {
    e.preventDefault();
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  loggedInCheck() {
    if(this.props.loggedIn === false){
      return (
        <div className='login-signup'>
          <Link to='/listings' className='signin-stuff'><p>Parkings</p></Link>
          <div className='vertical-divider'>|</div>
          <a className='signin-stuff'
            href="#"
            onClick={e => {
                this.handleEvent(e);
                this.props.openModal("signup");
            }}><p>Sign up</p>
          </a>
          <div className='vertical-divider'>|</div>
          <a className='signin-stuff'
            href="#"
            onClick={e => {
              this.handleEvent(e);
              this.props.openModal("login");
            }}><p>Log in</p>
          </a>
        </div>
      )
    } else  {
      return (
        <div className="login-signup">
          <Link to="/listings" className="signin-stuff">
            <p>Parkings</p>
          </Link>
          <div className='vertical-divider'>|</div>
          <Link to="/listings/new" className="signin-stuff">
            <p>Create a Listing</p>
          </Link>
          <div className='vertical-divider'>|</div>
          <Link to="/bookings/" className="signin-stuff">
            <p>My Bookings</p>
          </Link>
          <div className='vertical-divider'>|</div>
          <a
            className="signin-stuff"
            href="#"
            onClick={this.logout}
          >
            <p className='logout'>Log Out</p>
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <header className='main-navbar'>
          <div>
            <div className='logo-bar'>
              <Link to='/'><h1 id='main-logo' className='main-logo'></h1></Link>
            </div>
          </div>
          <div >
            <div>
              {this.loggedInCheck()}
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Navbar;
