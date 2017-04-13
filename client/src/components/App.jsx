import React from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

// Components
import Profile from './Profile.jsx';
import LandingPage from './LandingPage.jsx';
import StartPlanning from './StartPlanning.jsx';
import TripRoom from './tripRoom/TripRoom.jsx';
import TripCreationForm from './TripCreationForm.jsx';
import TripPreferencesForm from './TripPreferencesForm.jsx';

// Auth
import Signin from './authentication/Signin.jsx';
import Signup from './authentication/Signup.jsx';

// Navigation Menu
const Links = () => (
  <nav className="green lighten-1" role="navigation">
    <div className="nav-wrapper container"><NavLink id="logo-container" exact to="/" className="brand-logo">Booking Buddy</NavLink>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/profile">My Profile</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>
        <li><NavLink to="/signup">Register</NavLink></li>
        <li><NavLink to="/start-planning">Start Planning</NavLink></li>
        <li><NavLink to="/signout">Sign Out</NavLink></li>
        <li><NavLink to="/trip-room/:tripId">TripRoom</NavLink></li>
      </ul>

      <ul id="nav-mobile" className="side-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/profile">My Profile</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>
        <li><NavLink to="/signup">Register</NavLink></li>
        <li><NavLink to="/start-planning">Start Planning</NavLink></li>
        <li><NavLink to="/signout">Sign Out</NavLink></li>
        <li><NavLink to="/trip-room/:tripId">TripRoom(Testing)</NavLink></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
);

// Routes
const App = ({userInfo}) => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={LandingPage} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/start-planning" component={StartPlanning} />
      <Route path="/profile" component={() => <Profile userInfo={userInfo}/> }/>
      <Route path="/trip-room/:tripId" component={TripRoom} />
    </div>
  </Router>
);

// Export module
export default App;