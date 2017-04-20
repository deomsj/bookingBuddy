import React, { Component } from 'react';

class ProfileTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: '',
    };
  }

  componentWillMount() {
    console.log(this.state.tripName, this.props.trip.name);
  }

  // componentDidMount() {
  //   $(document).ready(function() {
  //     $('.collapsible').collapsible();
  //   });
  // }

  render() {
    return (
      <li>
        <div className="collapsible-header">
          <strong>{this.props.trip.name}</strong>
        </div>
        <div className="collapsible-body">
          <p>{this.props.trip.tripDescription}</p>
          <button className="btn orange">View Trip Room</button>
          <button className="btn orange">My Trip Preferences</button>
        </div>
      </li>

    );
  }
};

export default ProfileTrip;