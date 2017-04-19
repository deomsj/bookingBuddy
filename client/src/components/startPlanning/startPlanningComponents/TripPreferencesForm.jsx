var React, { Component } = require('react');
import {tripData} from '../../tripRoom/data/tripRoomDynamicData';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {worldCities} from '../../../../../worldcities.js'
//import nouislider.css from '../../../node-modules/materialize-css/extras/noUiSlider/'
//import nouislider.min.js from '../../../node-modules/materialize-css/extras/noUiSlider/'

const LocationsList = ({locations
}) => {
  console.log(tripData,"tripData!")
  var locations = locations.map(
    (location, index) => {
    return (
      <div>
        <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked"></input>
        <label htmlFor="filled-in-box">{location}</label>
      </div>
    );
  });
  return (
    <div>
       <span>{locations}</span>
    </div>
  );
};

class TripPreferencesForm extends Component {
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.changeHotelBudget = this.changeHotelBudget.bind(this);
    this.changeActivitiesBudget = this.changeActivitiesBudget.bind(this);
    this.changeFlightBudget = this.changeFlightBudget.bind(this);
    this.changeDuration = this.changeDuration.bind(this);
    this.changeBeginDate = this.changeBeginDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
    this.state = {
      locations: [],
      hotelBudget: 0,
      activitiesBudget: 0,
      flightBudget: 0,
      duration: 1,
      beginDate: '',
      endDate: '',
      location: '',
      totalBudget: 0
      //membersInvited: [],
      //tripName: '',
      //tripSummary: ''
    };
  }

  addLocation (e) {

    e.preventDefault();

    this.setState((prevState) => ({
      locations: prevState.locations.concat(prevState.location),
      location: ''
    }));
  }

  preserveLocation() {
    tripData.locations = this.state.locations;
    console.log(tripData, "Adding Locations!");
  }


  changeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  changeDuration(e) {
    var updatedBudget = parseInt(e.target.value) * (this.state.hotelBudget + this.state.activitiesBudget) + this.state.flightBudget;
    this.setState({
      totalBudget: updatedBudget ,
      duration: parseInt(e.target.value),
    });
  }

  changeHotelBudget(e) {
    var updatedBudget = this.state.duration * (parseInt(e.target.value) + this.state.activitiesBudget) + this.state.flightBudget;
    this.setState({
      totalBudget: updatedBudget ,
      hotelBudget: parseInt(e.target.value),
    });
  }

  changeActivitiesBudget(e) {
    var updatedBudget = this.state.duration * (this.state.hotelBudget + parseInt(e.target.value)) + this.state.flightBudget;
    this.setState({
      totalBudget: updatedBudget ,
      activitiesBudget: parseInt(e.target.value),
    });
  }

  changeFlightBudget(e) {
    var updatedBudget = this.state.duration * (this.state.hotelBudget + this.state.activitiesBudget) + parseInt(e.target.value);
    this.setState({
      totalBudget: updatedBudget ,
      flightBudget: parseInt(e.target.value),
    });
  }



  componentDidMount() {
    $(document).ready((function() {
      $('.collapsible').collapsible();
      $('select').material_select();
      $('input.autocomplete').autocomplete({
        data: worldCities,
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: (function(val) {
          this.setState({location: val});
          // Callback function when value is autcompleted.
        }).bind(this),
        minLength: 3, // The minimum length of the input for the autocomplete to start. Default: 1.
      }).bind(this);
      // $('.datepicker').pickadate({
      //   selectMonths: true, // Creates a dropdown to control month
      //   selectYears: 15 // Creates a dropdown of 15 years to control year
      // }).on("submit", this.changeBeginDate);
    }).bind(this)).bind(this);
  }

  render() {
    return (
      <div className="row">
        <div className="section">
          <ul className="collapsible popout" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">location_on</i>Location</strong>
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="col s8">
                    <input type="text" id="autocomplete-input" className="autocomplete" placeholder="Tell us where you would like to go" onClick={this.changeLocation} onChange={this.changeLocation} value={this.state.location} />
                  </div>
                  <div className="col s4">
                    <button onClick={this.addLocation} className="btn btn-large waves-effect waves-light orange">Add Location</button>
                  </div>
                  <div>
                    <LocationsList locations={this.state.locations} />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">schedule</i>Durations</strong>
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="input-field col s12">
                  <p>Tell us how many nights you want to spend on your getaway?</p>
                    <form action="#">
                      <p id="totalNights" className="bling green-text darken-2"><strong>Nights: {this.state.duration} </strong></p>
                    </form>
                    <form action="#">
                    <p className="range-field">
                    <input type="range" id="budgetRange" min="0" max="50000" />
                    </p>
                    </form>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">today</i>When</strong>
                </div>
                <div className="collapsible-body">
                  <div className="row">
                    <div className="col s12">
                      <p>Tell us when you would like to go on your trip?</p>
                    </div>
                  </div>
                  <div className="row">
                    <form action="#">
                    <div className="col s6">
                      <input type="date" className="datepicker" placeholder="Select a start date:" onChange={this.changeBeginDate} value={this.state.beginDate}></input>
                    </div>
                    </form>
                    <form action="#">
                    <div className="col s6">
                      <input type="date" className="datepicker" placeholder="Select an end date:" onChange={this.changeEndDate} value={this.state.endDate}></input>
                    </div>
                    </form>
                  </div>
                </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong><p className="bling green-text darken-2">$</p>Budget</strong>
              </div>
              <div className="collapsible-body">
                <div>
                  <p>Tell us how many nights you want to spend on your getaway?</p>
                    <div className="input-field col s12">
                      <select>
                        <option value="Choose your option">Any length is fine with me!</option>
                        <option value="1">1 Night</option>
                        <option value="2">2 Nights</option>
                        <option value="3">3 Nights</option>
                        <option value="4">4 Nights</option>
                        <option value="5">5 Nights</option>
                        <option value="6">6 Nights</option>
                        <option value="7">7 Nights</option>
                        <option value="8">8 Nights</option>
                        <option value="9">9 Nights</option>
                        <option value="10">10 Nights</option>
                        <option value="11">11 Nights</option>
                        <option value="12">12 Nights</option>
                        <option value="13">13 Nights</option>
                        <option value="14">14 Nights</option>
                        <option value="15">15 Nights</option>
                        <option value="16">16 Nights</option>
                        <option value="17">17 Nights</option>
                        <option value="18">18 Nights</option>
                        <option value="19">19 Nights</option>
                        <option value="20">20 Nights</option>
                        <option value="21">21 Nights</option>
                        <option value="22">22 Nights</option>
                        <option value="23">23 Nights</option>
                        <option value="24">24 Nights</option>
                        <option value="25">25 Nights</option>
                        <option value="26">26 Nights</option>
                        <option value="27">27 Nights</option>
                        <option value="28">28 Nights</option>
                        <option value="29">29 Nights</option>
                        <option value="30">30 Nights</option>
                        <option value="31">31 Nights</option>
                        <option value="30">2 Months</option>
                        <option value="31">3 Months</option>
                      </select>
                    </div>
                  </div>
                  <p>Tell us when you would like to go on your trip?</p>
                  <div className="col s6">
                    <input type="date" className="datepicker" placeholder="Select a start date:"></input>
                  </div>
                  <div className="col s6">
                    <input type="date" className="datepicker" placeholder="Select an end date:"></input>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

// const TripPreferencesForm = () => (
//   <h2>Trip Preferences Form</h2>
// );
export default TripPreferencesForm;