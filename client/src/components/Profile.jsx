import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'materialize-css';
import $ from 'jquery';
import {tripData} from './tripRoom/tripRoomDynamicData';
import {getUserTripNames} from '../services/tripServices';

var ProfileUser = ({profile}) => (
  <div>
    <div className="card">
      <div className="card-image">
        <img className="responsive-img" src={profile.picture} alt="profile picture"/>
      </div>
      <div className="card-content">
        <h1 className="card-title">{profile.name}</h1>
      </div>
      <div className="card-content">
        <p>{profile.email}</p>
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
}

var ProfileTripsList = ({userTripsArr}) => {
  var tripsComponent = userTripsArr.map((trip, index) => (
    <ProfileTrip trip={trip} key={index} />
  ));
  return (
    <div>{tripsComponent}</div>
  )
};
// Functional, stateless component
// destructure props object
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tripsArray: [],
    };
  }
  componentWillMount() {
  //this ajax request will get all trips assiciated with any user according to thier email address
    //only thing that will change is the email address from the data object below
    this.getTripNames(this.props.profile.email);
  }

  getTripNames(email){
    $.ajax({
      type: 'POST',
      url: '/userTripNames',
      dataType: 'json',
      data: {email:'johndoe@gmail.com'},
      success: function(data) {
        this.setState({tripsArray:data});
        console.log(this.state.tripsArray, "React State")
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
      <div className="Profile section">
        <div className="container">
          <div className="row">
            <div className="col m4">
              <ProfileUser profile={this.props.profile} />
            </div>
            <div className="col m8">
              <div className="ProfileTrips">
                <h2 className="header orange-text">Current Trips</h2>
                <div className="section">
                  <ul className="collapsible popout" data-collapsible="accordion">
                    <ProfileTripsList userTripsArr={this.state.tripsArray} />
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
  }
};

export default Profile;
