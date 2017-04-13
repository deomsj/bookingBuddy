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

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <h3>Trip Preferences Form</h3>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Enter a destination you are interested in" onChange={this.changeLocation} value={this.state.location} />
            </div>
            <div className="input-field col s6">
              <input placeholder="Enter your maximum budget for this trip" onChange={this.changeBudget} value={this.state.budget} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input type="date" className="datepicker" placeholder="Enter beginning date for this trip" onChange={this.changeBeginDate} value={this.state.beginDate} /> <br/>
            </div>
            <div className="input-field col s6">
              <input type="date" className="datepicker" placeholder="Enter ending date for this trip" onChange={this.changeEndDate} value={this.state.endDate} /> <br/>
            </div>
          </div>
            <Link className="waves-effect waves-light orange btn" to="">Submit</Link>
        </form>
      </div>
    );
  }

}
// const TripPreferencesForm = () => (
//   <h2>Trip Preferences Form</h2>
// );
export default TripPreferencesForm;