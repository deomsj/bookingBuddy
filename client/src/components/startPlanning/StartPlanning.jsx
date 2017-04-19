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
    <Link className="waves-effect waves-light orange btn" to="/start-planning/trip-create">Create Trip</Link>
    <Link className="waves-effect waves-light orange btn" to="/start-planning/trip-preferences">Trip Preferences</Link>
  </div>
);

const PlanningRoutes = () => (
  <Router>
    <div>
      <PlanningLinks />
      <Route
        path="/start-planning/trip-create"
        component={TripCreationForm} />
      <Route
        path="/start-planning/trip-preferences"
        component={TripPreferencesForm} />
    </div>
  </Router>
);

class StartPlanning extends Component {

  render() {
    return (
      <div className="container">
        <h2>Start Planning</h2>
        <PlanningRoutes />
      </div>
    );
  }
}

export default StartPlanning;
