import React, { Component } from 'react';
import TripMemberInvitesForm from './TripMemberInvitesForm.jsx';

class TripCreationForm extends Component {

  constructor(props) {
    super(props);
    this.changeTripName = this.changeTripName.bind(this);
    this.changeTripSummary = this.changeTripSummary.bind(this);
    this.state = {
      membersInvited: [],
      tripName: '',
      tripSummary: ''
    };
  }

  changeTripName(e) {
    this.setState({
      tripName: e.target.value,
    });
  }

  changeTripSummary(e) {
    this.setState({
      tripSummary: e.target.value
    });
  }

  render() {
    return (
      <div>
        <p>Trip Name:</p>
        <input onChange={this.changeTripName} value={this.state.tripName} /> <br />
        <p>Trip Description:</p>
        <textarea onChange={this.changeTripSummary} defaultValue={this.state.tripSummary}/>
        <TripMemberInvitesForm />
      </div>
    );
  }
}

export default TripCreationForm;