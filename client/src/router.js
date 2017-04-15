// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App.jsx';
import Profile from './components/Profile.jsx';
import LandingPage from './components/LandingPage.jsx';
import StartPlanning from './components/StartPlanning.jsx';
import TripCreationForm from './components/TripCreationForm.jsx';
import TripPreferencesForm from './components/TripPreferencesForm.jsx';
import TripRoom from './components/tripRoom/TripRoom.jsx';
import Signin from './components/authentication/Signin.jsx';
import Signup from './components/authentication/Signup.jsx';
import PostRegistration from './components/authentication/PostRegistration.jsx'

// Routes
const routes = (
  <Router history={browserHistory}>

    <Route component={App}>

      <Route path="/" component={CommentList} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
      <Route path="start-planning" component={StartPlanning} >
        <Route path="trip-create" component={TripCreationForm} />
        <Route path="trip-preferences" component={TripPreferencesForm} />
      </Route>
      <Route path="profile" component={Profile} >
        <Route path="trip-room/:tripId" component={TripRoom} />
      </Route>
      <Route path="postRegistration" component={postRegistration}/>

    </Route>

  </Router>
);

export default routes;
