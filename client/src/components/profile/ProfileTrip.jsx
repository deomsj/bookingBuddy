import React, { Component } from 'react';

var ProfileTrip = function({trip}) {
  return (
    <li>
      <h5 className="collapsible-header">
        {trip.name}
      </h5>
      <div className="collapsible-body center-align">
        <p className="center-align flow-text">{trip.description}</p>
        <button className="btn orange">View Trip Room</button>
        <button className="btn orange">My Trip Preferences</button>
      </div>
    </li>

  );
};

export default ProfileTrip;