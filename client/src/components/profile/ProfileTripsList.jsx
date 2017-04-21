import React, { Component } from 'react';
import ProfileTrip from './ProfileTrip.jsx';

class ProfileTripsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }

  render() {
    return (
      <div className="section">
        <ul className="collapsible popout" data-collapsible="accordion">
          {this.props.userTripsArr.map((trip, index) => (
            <ProfileTrip trip={trip} key={index} selectTrip={this.props.selectTrip}/>
          ))}
        </ul>
      </div>
    )
  }
};

export default ProfileTripsList;