import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'materialize-css';
import $ from 'jquery';
import {userData} from './tripRoom/tripRoomDynamicData';



var ProfileUser = ({userInfo}) => (
  <div>
    <div className="card">
      <div className="card-image">
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


class ProfileTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: '',
    };
  }

  componentWillMount() {
    //this ajax request will get all trips assiciated with any user according to thier email address
    //only thing that will change is the email address from the data object below
    $.ajax({
      type: 'POST',
      url: '/userTripNames',
      dataType: 'json',
      data: {email:'johndoe@gmail.com'},
      success: function(data) {
        this.setState({tripName : data[0].name});
      }.bind(this)
    });
  }

  componentDidMount() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }

  render() {
    return (
      <li>
        <div className="collapsible-header">
          <strong>{this.state.tripName}</strong>
        </div>
        <div className="collapsible-body">
          <p>{this.props.trip.tripDescription}</p>
          <button className="btn orange">View Trip Room</button>
          <button className="btn orange">My Trip Preferences</button>
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
              <h2 className="header orange-text">Current Trips</h2>
              <div className="section">
                <ul className="collapsible popout" data-collapsible="accordion">
                  {tripList}
                </ul>
              </div>
              <div className="divider"></div>
              <div className="section">
                <Link className="waves-effect waves-light orange btn" to="/start-planning/trip-create">CREATE NEW TRIP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
