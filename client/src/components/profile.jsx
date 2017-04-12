import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Profile extends Component {

  handleClick(event) {
    event.preventDefault();
    let tripId = event.target.elements[0].value;
    let path = `trip-room/${tripId}`;
    browserHistory.push(path);
  }

  render() {
    return (
      <div>
        <h2>Profile Page</h2>
        <button>
          {/* /23/ needs to be replaced with the actual TripRoom ID */}
          <Link to="/trip-room/23">Enter Trip Room</Link>
        </button>
      </div>
    );
  }
}

export default Profile;
