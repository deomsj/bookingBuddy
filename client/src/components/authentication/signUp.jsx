import React from 'react';



class Signup extends React.Component {

  constructor(props) {
    super(props);
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
        <h1>Signup</h1>
        <p>Trip Name:</p>
        <input onChange={this.changeTripName} value={this.state.tripName} /> <br />
        <p>Trip Description:</p>
        <textarea onChange={this.changeTripSummary} defaultValue={this.state.tripSummary}/>
      </div>
    );
  }

}

export default Signup;