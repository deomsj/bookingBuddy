import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'materialize-css';
import $ from 'jquery';
import {tripsArray} from '../tripRoom/data/tripRoomDummyData';


import ProfileUserInfo from './ProfileUserInfo.jsx';
import ProfileTripsList from './ProfileTripsList.jsx';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tripsArray: tripsArray,
    };
  }
  componentWillMount() {
  //this ajax request will get all trips assiciated with any user according to thier email address
    //only thing that will change is the email address from the data object below
    this.getTripNames(this.props.profile.email);
  }

  getTripNames(email){
    console.log(email);
    $.ajax({
      type: 'POST',
      url: '/userTripNames',
      dataType: 'json',
      data: { email : email },
      success: function(data) {
        this.setState({tripsArray:data});
       // console.log('lets use our dummy data until we get real data that looks just like this:');
        //console.log(tripsArray);
        console.log('Current real data' , data);
      }.bind(this)
    });
  }

  render() {
    console.log('props passed to profile component: ', this.props.profile);
    return (
      <div className="Profile section">
        <div className="container">
          <div className="row">
            <div className="col m4">
              <ProfileUserInfo profile={this.props.profile} />
            </div>
            <div className="col m8">
              <div className="ProfileTrips">
                <h2 className="header orange-text">Current Trips</h2>
                <ProfileTripsList userTripsArr={this.state.tripsArray} selectTrip={this.props.selectTrip} />
                <div className="divider"></div>
                <div className="section center-align">
                  <Link className="orange btn" to="/start-planning/trip-create">CREATE NEW TRIP</Link>
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