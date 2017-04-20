import React, { Component } from 'react';

var ProfileTrip = function({trip}) {
  return (
    <li>
      <div className="collapsible-header">
        <strong>{trip.name}</strong>
      </div>
      <div className="collapsible-body">
        <p>{trip.tripDescription}</p>
        <button className="btn orange">View Trip Room</button>
        <button className="btn orange">My Trip Preferences</button>
      </div>
    </li>

  );
};

export default ProfileTrip;