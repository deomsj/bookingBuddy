import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import {
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN
} from '../../../env.config.js';

// Components
import Profile from './Profile.jsx';
import LandingPage from './LandingPage.jsx';
import StartPlanning from './StartPlanning.jsx';
import TripRoom from './tripRoom/TripRoom.jsx';
import TripCreationForm from './TripCreationForm.jsx';
import TripPreferencesForm from './TripPreferencesForm.jsx';
import PostRegistration from './authentication/PostRegistration.jsx';

// Auth
import Signin from './authentication/Signin.jsx';
import Signup from './authentication/Signup.jsx';
import AuthService from '../auth/AuthService';

const LoginStatusDisplay = ({isloggedIn, logInOrOut}) => (
  <NavLink to="/" onClick={logInOrOut} className='loginStatusDisplay'>
    {isloggedIn ? 'Log Out' : 'Log In'}
  </NavLink>
);

// Navigation Menu
const Links = ({isloggedIn, logInOrOut}) => (
  <nav className="green lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <NavLink id="logo-container" exact to="/" className="brand-logo">Booking Buddy</NavLink>
      <ul className="right hide-on-med-and-down">
        {
          isloggedIn ?
          <li><NavLink to="/profile">My Profile</NavLink></li> :
          <li><NavLink exact to="/">Home</NavLink></li>
        }
        <li>
          <LoginStatusDisplay
            isloggedIn={isloggedIn}
            logInOrOut={logInOrOut}
          />
        </li>
        <li><NavLink to="/start-planning">Start Planning</NavLink></li>
        <li><NavLink to="/trip-room/:tripId">TripRoom</NavLink></li>
        <li><NavLink to="/postRegistration">PostRegistration</NavLink></li>
      </ul>

      <ul id="nav-mobile" className="side-nav">
        {
          isloggedIn ?
          <li><NavLink to="/profile">My Profile</NavLink></li> :
          <li><NavLink exact to="/">Home</NavLink></li>
        }
        <li>
          <LoginStatusDisplay
            isloggedIn={isloggedIn}
            logInOrOut={logInOrOut}
          />
        </li>
        <li><NavLink to="/postRegistration">PostRegistration</NavLink></li>
        <li><NavLink to="/start-planning">Start Planning</NavLink></li>
        <li><NavLink to="/trip-room/:tripId">TripRoom</NavLink></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
);

class App extends Component {

  constructor (props) {
    super(props);
    this.logInOrOut = this.logInOrOut.bind(this);
    this.state = {
      isloggedIn: false,
      profile: {}
    };

    this.auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

    this.auth.on('profile_updated', (newProfile) => {
      this.setState({
        profile: newProfile,
        isloggedIn: true
      });
    });
  }

  logInOrOut() {
    if (!this.state.isloggedIn) {
      this.auth.login();
    } else {
      this.auth.logout();
      this.setState({
        profile: {},
        isloggedIn: false
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Links
            isloggedIn={this.state.isloggedIn}
            logInOrOut={this.logInOrOut}
          />
          <Route
            exact path="/"
            render={() => (
              !this.state.isLoggedIn ?
              <LandingPage /> :
              <Redirect to='/profile' />
            )
          } />
          <Route
            path="/profile"
            render={() => <Profile profile={this.state.profile}/> }
          />
          <Route path="/start-planning" component={StartPlanning} />
          <Route path="/postRegistration" component={PostRegistration}/>
          <Route path="/trip-room/:tripId" component={TripRoom} />
        </div>
      </Router>
    )
  }
};

// Export module
export default App;