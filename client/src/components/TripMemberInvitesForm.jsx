import React, { Component } from 'react';

const InvitedMember = ({name, email}) => (
  <div>
    <td>{name}</td>
    <td>{email}</td>
  </div>
);

const InvitedMemberList = ({invitedMembers}) => {

  var invitedMembers = invitedMembers.map( (memberObj, index) => {
    return (
      <InvitedMember name={memberObj.name} email={memberObj.email} key={index}/>
    );
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr>
          {invitedMembers}
        </tr>
      </tbody>
    </table>
  );
};

class TripMemberInvitesForm extends Component {

  constructor(props) {
    super(props);
    this.changeBuddyName = this.changeBuddyName.bind(this);
    this.changeBuddyEmail = this.changeBuddyEmail.bind(this);
    this.addBuddy = this.addBuddy.bind(this);
    this.state = {
      buddyName: '',
      buddyEmail: '',
      invitedMembers: []
    };
  }

  render() {

    return (
      <div>
        <h3>Invite Your Buddies: </h3>
        <InvitedMemberList invitedMembers={this.state.invitedMembers}/>
        <form onSubmit={this.addBuddy}>
          <p>Name: </p>
          <input onChange={this.changeBuddyName} value={this.state.buddyName} /> <br />
          <p>Email: </p>
          <input onChange={this.changeBuddyEmail} value={this.state.buddyEmail} /> <br />
          <button />
        </form>
      </div>
    );
  }


  changeBuddyName (e) {
    this.setState({
      buddyName: e.target.value
    });
  }

  changeBuddyEmail (e) {
    this.setState({
      buddyEmail: e.target.value
    });
  }

  addBuddy (e) {

    e.preventDefault();

    var buddy = {
      name: this.state.buddyName,
      email: this.state.buddyEmail
    };

    this.setState((prevState) => ({
      invitedMembers: prevState.invitedMembers.concat(buddy),
      buddyName: '',
      buddyEmail: ''
    }));
  }
}



export default TripMemberInvitesForm;