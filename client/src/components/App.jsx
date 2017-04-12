import React from 'react';
import {
  BrowserRouter as Router,
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
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/profile">My Profile</NavLink>
    <NavLink to="/signin">Sign In</NavLink>
    <NavLink to="/signup">Register</NavLink>
    <NavLink to="/start-planning">Start Planning</NavLink>
    <NavLink to="/signout">Sign Out</NavLink>
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