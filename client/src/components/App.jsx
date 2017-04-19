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
import NavBarLinks from './NavBarLinks.jsx';
import Profile from './Profile.jsx';
import LandingPage from './LandingPage.jsx';
import StartPlanning from './StartPlanning.jsx';
import TripRoom from './tripRoom/TripRoom.jsx';
import TripCreationForm from './TripCreationForm.jsx';
import TripPreferencesForm from './TripPreferencesForm.jsx';
import PostRegistration from './authentication/PostRegistration.jsx';

// Auth
import AuthService from '../auth/AuthService';

class App extends Component {

  constructor (props) {
    super(props);
    this.logInOrOut = this.logInOrOut.bind(this);
    this.state = {
      isLoggedIn: false,
      profile: {}
    };

    this.auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

    this.auth.on('profile_updated', (newProfile) => {
      this.setState({
        profile: newProfile,
        isLoggedIn: true
      });
    });
  }

  logInOrOut() {
    if (!this.state.isLoggedIn) {
      this.auth.login();
    } else {
      this.auth.logout();
      this.setState({
        profile: {},
        isLoggedIn: false
      });
    }
  }

  render() { return (
    <div className="App">
      <Router>
        <div>
          <NavBarLinks isLoggedIn={this.state.isLoggedIn} logInOrOut={this.logInOrOut} />
          <Route
            exact path="/"
            render={() =>
              !this.state.isLoggedIn ? <LandingPage /> : <Redirect to='/profile' />
          } />
          <Route
            path="/profile"
            render={() => <Profile profile={this.state.profile}/> }
          />
          <Route exact path="/landingPage" component={LandingPage} />
          <Route path="/start-planning" component={StartPlanning} />
          <Route path="/postRegistration" component={PostRegistration}/>
          <Route path="/trip-room/:tripId" component={TripRoom} />
        </div>
      </Router>
    </div>
  )};
};

// Export module
export default App;