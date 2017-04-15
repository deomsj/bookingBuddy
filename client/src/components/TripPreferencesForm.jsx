import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class TripPreferencesForm extends Component {
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    // this.changeBudget = this.changeBudget.bind(this);
    // this.changeBeginDate = this.changeBeginDate.bind(this);
    // this.changeEndDate = this.changeEndDate.bind(this);
    this.state = {
      location: '',
      budget: '',
      beginDate: '',
      endDate: ''
      //membersInvited: [],
      //tripName: '',
      //tripSummary: ''
    };
  }
  // componentDidMount() {
  //   $(document).ready(function() {
  //     $('.modal').modal();
  //   });
  // }
  changeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }
  changeBudget(e) {
    this.setState({
      budget: e.target.value,
    });
  }
  changeBeginDate(e) {
    this.setState({
      tripType: e.target.value,
    });
  }
  changeEndDate(e) {
    this.setState({
      when: e.target.value,
    });
  }
  showLocation() {
    if (this.state.location) {
      this.setState({
        location: ''
      });
    } else {
      this.setState({
        location: (
          <div>
            <p>{this.props.location}</p>
            <button>View Trip Room</button>
            <button>My Trip Preferences</button>
          </div>
          )
      });
    }
  }
  // showbudget() {
  // }
  // showTripType() {
  // }
  // showWhen() {
  // }

  componentDidMount() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
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
                    <input type="text" placeholder="Location" />
                  </div>
                  <div className="col s4">
                    <button className="btn btn-large waves-effect waves-light orange">Add Location</button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong><p className="bling green-text darken-2">$</p>Budget</strong>
              </div>
              <div className="collapsible-body">
                <p>description</p>
                <button className="btn orange">View Trip Room</button>
                <button className="btn orange">My Trip Preferences</button>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">today</i>Durations</strong>
              </div>
              <div className="collapsible-body">
                <p>description</p>
                <button className="btn orange">View Trip Room</button>
                <button className="btn orange">My Trip Preferences</button>
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