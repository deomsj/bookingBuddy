import React, { Component } from 'react';
import ProfileTrip from './ProfileTrip.jsx';

var ProfileTripsList = ({userTripsArr}) => {
  var tripsComponent = userTripsArr.map((trip, index) => (
    <ProfileTrip trip={trip} key={index} />
  ));
  return (
    <div className="section">
      <ul className="collapsible popout" data-collapsible="accordion">
        {tripsComponent}
      </ul>
    </div>
  )
};

export default ProfileTripsList;