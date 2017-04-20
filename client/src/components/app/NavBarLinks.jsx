import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const LoginStatusDisplay = ({isLoggedIn, logInOrOut}) => (
  <NavLink to="/" onClick={logInOrOut} className='loginStatusDisplay'>
    {isLoggedIn ? 'Log Out' : 'Log In'}
  </NavLink>
);

// Navigation Menu
const NavBarLinks = ({isLoggedIn, logInOrOut}) => (
  <nav className="green lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <NavLink id="logo-container" exact to="/" className="brand-logo">Booking Buddy</NavLink>
      <ul className="right hide-on-med-and-down">
        {
          isLoggedIn ?
              <li><NavLink to="/profile">My Profile</NavLink></li>
          :
            <span>
              <li><NavLink exact to="/landingPage">Home</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
            </span>
        }
        <li><NavLink to="/start-planning">Start Planning</NavLink></li>
        <li><LoginStatusDisplay isLoggedIn={isLoggedIn} logInOrOut={logInOrOut} /></li>
      </ul>

      <ul id="nav-mobile" className="side-nav">
        {
          isLoggedIn ?
              <li><NavLink to="/profile">My Profile</NavLink></li>
          :
            <span>
              <li><NavLink exact to="/landingPage">Home</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
            </span>
        }
        <li><NavLink to="/start-planning">Start Planning</NavLink></li>
        <li><LoginStatusDisplay isLoggedIn={isLoggedIn} logInOrOut={logInOrOut} /></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
);

//<li><NavLink to="/postRegistration">PostRegistration^</NavLink></li>
//<li><NavLink to="/trip-room">TripRoom^</NavLink></li>

export default NavBarLinks;