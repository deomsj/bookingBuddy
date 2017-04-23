import React, { Component } from 'react';
import {tripData} from '../../../tripRoom/data/tripRoomDynamicData';
import {friendsData} from '../../../tripRoom/data/friendsDummyData';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {worldCities} from '../../../../../../worldcities.js'

const FriendsLocationsList = ({friendsData}) => {
  console.log(friendsData,"friendsData!")
  var uniqueLocations = [];
  var friendsLocations;
  if (Object.keys(friendsData).length !== 0) { 
    for (var key in friendsData) {
      friendsLocations = friendsData[key].locations.map(
        (location, index) => {
        if (!uniqueLocations.includes(location)) {
          uniqueLocations.push(location);
        }
      });
    }
    var locations = uniqueLocations.map(
      (location, index) =>{        
        return (
          <span className="checkbox" key={index}>
            <input type="checkbox" className="filled-in" id="filled-in-box" ></input>
            <label htmlFor="filled-in-box">{location}</label>
          </span>
        );
      });  
    return (
      <div><p className="orange-text darken-2">These are the locations your friends have already selected:</p>
         <span>{locations}</span>
      </div>
    );
  }  
};


const LocationsList = ({locations
}) => {
  var locations = locations.map(
    (location, index) => {

    return (
      <span className="checkbox" key={index}>
        <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked"></input>
        <label htmlFor="filled-in-box">{location}</label>
      </span>
    );
  });
  return (
    <div>
       <span>{locations}</span>
    </div>
  );
};


class LocationCard extends Component {  
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    this.addLocation = this.addLocation.bind(this);
  }  

  addLocation (e) {

    e.preventDefault();

    this.setState((prevState) => ({
      locations: prevState.locations.concat(prevState.location),
      location: ''
    }));
  }

  addFriendsLocation (location) {

    this.setState((prevState) => ({
      locations: prevState.locations.concat(location),
    }));
  }

  changeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }


        render() {
          return (
            <li>
              <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">location_on</i>Location</strong>
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="col s7">
                    <input type="text" id="autocomplete-input" className="autocomplete" placeholder="Tell us where you would like to go" onClick={this.changeLocation} onChange={this.changeLocation} value={this.state.location} />
                      <span>
                        <button onClick={this.addLocation} className="btn btn-large orange">Add Location</button>
                      </span>
                    <LocationsList locations={this.state.locations} />
                  </div>
                  <div className="friendsBox col s5">
                    <FriendsLocationsList friendsData={this.state.friendsData} />
                  </div>
                </div>
              </div>
            </li>
          )}; 
        };   

export default LocationCard;
