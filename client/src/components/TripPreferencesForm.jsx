import React, { Component } from 'react';
//import $ from 'jQuery';
//import 'materialize-css';
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
  render() {
    return (
      <div>
        <li>
          <h3>Trip Preferences Form</h3>
          <h4 onClick={this.showLocation.bind(this)} > Location </h4>
          <h4>Enter a destination you are interested in:</h4>
            <input onChange={this.changeLocation} value={this.state.location} /> <br/>
          <h4>Enter your maximum budget for this trip:</h4>
            <input onChange={this.changeBudget} value={this.state.budget} /> <br/>
          <h4>Enter beginning date for this trip:</h4>
            <input onChange={this.changeBeginDate} value={this.state.beginDate} /> <br/>
          <h4>Enter ending date for this trip:</h4>
            <input onChange={this.changeEndDate} value={this.state.endDate} /> <br/>
          <button><h5>Submit</h5></button>
        </li>
      </div>
    );
  }

}
// const TripPreferencesForm = () => (
//   <h2>Trip Preferences Form</h2>
// );
export default TripPreferencesForm;