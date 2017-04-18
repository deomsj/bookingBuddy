import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {worldCities} from '../../../worldcities.js'
//import nouislider.css from '../../../node-modules/materialize-css/extras/noUiSlider/'
//import nouislider.min.js from '../../../node-modules/materialize-css/extras/noUiSlider/'

const LocationsList = ({locations
}) => {
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
    // this.changeBudget = this.changeBudget.bind(this);
    // this.changeBeginDate = this.changeBeginDate.bind(this);
    // this.changeEndDate = this.changeEndDate.bind(this);
    this.state = {
      locations: [],
      budget: '',
      beginDate: '',
      endDate: '',
      location: ''
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


  changeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }
  // changeBeginDate(e) {
  //   this.setState({
  //     tripType: e.target.value,
  //   });
  // }
  // changeEndDate(e) {
  //   this.setState({
  //     when: e.target.value,
  //   });
  // }
 
  

  componentDidMount() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
      $('select').material_select();
      $('input.autocomplete').autocomplete({
        data: worldCities,
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
        },
        minLength: 3, // The minimum length of the input for the autocomplete to start. Default: 1.
      });
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    });
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
                    <input type="text" id="autocomplete-input" className="autocomplete" placeholder="Location" onChange={this.changeLocation} value={this.state.location} />
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
                <strong><p className="bling green-text darken-2">$</p>Budget</strong>
              </div>
              <div className="collapsible-body">
                <p>What's your maximum budget for this trip?</p>
                  <form action="#">
                    <p className="range-field">
                    <input type="range" id="budgetRange" min="0" max="50000" />
                    </p>
                  </form>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">today</i>Durations</strong>
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