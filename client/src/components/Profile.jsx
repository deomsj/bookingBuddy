import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



var ProfileUser = ({userInfo}) => (
  <div>
    <div className="card">
      <div classNme="card-image">
        <img className="responsive-img" src={userInfo.imageUrl} alt="profile picture"/>
      </div>
      <div className="card-content">
        <h1 className="card-title">{userInfo.userName}</h1>
      </div>
      <div className="card-content">
        <p>{userInfo.userEmail}</p>
      </div>
    </div>
  </div>
);

{/*
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
            <button className="btn">View Trip Room</button>
            <button className="btn">My Trip Preferences</button>
          </div>
          )
      });
    }
  }

  render() {
    return (
      <li>
        <h4 onClick={this.showTripDescription.bind(this)} >
          {this.props.trip.tripName}
        </h4>
        {this.state.tripBody}
      </li>

    );
  }
}
*/}

class ProfileTrip extends Component {

  render() {
    return (
      <li>
        <div className="collapsible-header">
          <strong>{this.props.trip.tripName}</strong>
        </div>
        <div className="collapsible-body">
          <p>{this.props.trip.tripDescription}</p>
          <button className="btn">View Trip Room</button>
          <button className="btn">My Trip Preferences</button>
        </div>
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
    <div className="Profile section">
      <div className="container">
        <div className="row">
          <div className="col m4">
            <ProfileUser userInfo={userInfo} />
          </div>
          <div className="col m8">
            <div className="ProfileTrips">
              <h2 className="header">Current Trips</h2>
              <div className="section">
                <ul className="collapsible popout" data-collapsible="accordion">
                  {tripList}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
