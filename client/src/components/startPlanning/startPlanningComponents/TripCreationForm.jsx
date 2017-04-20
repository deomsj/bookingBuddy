import React, { Component } from 'react';
import TripMemberInvitesForm from './TripMemberInvitesForm.jsx';
import {tripData} from '../../tripRoom/data/tripRoomDynamicData';

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

  viewProfile() {
    console.log(tripData.profile);
  }
  changeTripName(e) {
    this.setState({
      tripName: e.target.value,
    });
    tripData.tripName = this.state.tripName;

  }

  changeTripSummary(e) {
    this.setState({
      tripSummary: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Trip Name" className="validate" onChange={this.changeTripName} value={this.state.tripName} /> <br />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea" placeholder="Trip Description" onChange={this.changeTripSummary} defaultValue={this.state.tripSummary}/>
            </div>
          </div>
          <TripMemberInvitesForm />
        </form>
      </div>
    );
  }
}

export default TripCreationForm;