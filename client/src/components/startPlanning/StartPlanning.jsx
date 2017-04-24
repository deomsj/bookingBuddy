import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import TripCreationForm from './startPlanningComponents/TripCreationForm.jsx';
import TripPreferencesForm from './startPlanningComponents/TripPreferencesForm.jsx';

const PlanningLinks = () => (
  <div>
    <Link className="orange btn" to="/start-planning/trip-create">Create Trip</Link>
    <Link className="orange btn" to="/start-planning/trip-preferences">Trip Preferences</Link>
  </div>
);

const PlanningRoutes = ({userEmail, tripId}) => (
  <Router>
    <div>
      <PlanningLinks />
      <Route
        path="/start-planning/trip-create"
        render={() => <TripCreationForm userEmail={userEmail} /> } />
      <Route
        path="/start-planning/trip-preferences"
        render={() => <TripPreferencesForm userEmail={userEmail} tripId={tripId} /> } />
    </div>
  </Router>
);

const StartPlanning = ({userEmail, tripId}) => (
  <div className="container start-planning">
    <h2>Start Planning</h2>
    <PlanningRoutes userEmail={userEmail} tripId={tripId} />
  </div>
);

export default StartPlanning;
