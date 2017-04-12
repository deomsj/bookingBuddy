import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



var ProfileUser = ({userInfo}) => (
  <div>
    <h1>{userInfo.userName}</h1>
    <img width="500px" src={userInfo.imageUrl} alt="profile picture"/>
    <p>{userInfo.userEmail}</p>
  </div>
);


class ProfileTrip extends Component {

  constructor (props) {
    super(props);
    this.state = {
      tripBody: ''
    };
  }

  showTripDescription() {
    if (this.state.tripBody) {
      this.setState({
        tripBody: ''
      });
    } else {
      this.setState({
        tripBody: (
          <div>
            <p>{this.props.trip.tripDescription}</p>
            <button>View Trip Room</button>
            <button>My Trip Preferences</button>
          </div>
          )
      });
    }
  }

  render() {
    return (
      <li>
        <h2 onClick={this.showTripDescription.bind(this)} >
          {this.props.trip.tripName}
        </h2>
        {this.state.tripBody}
      </li>

    );
  }
}



// Functional, stateless component
// destructure props object
var Profile = function ({userInfo}) {
  var tripList = userInfo.trips.map((trip, index) => (
      <ProfileTrip trip={trip} key={index} />
    ));

  return (
    <div className="Profile">
      <ProfileUser userInfo={userInfo} />
      <div className="ProfileTrips">
        <h1>Current Trips</h1>
        <ul>
          {tripList}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
