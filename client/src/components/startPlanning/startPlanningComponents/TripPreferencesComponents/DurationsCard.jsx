import React, { Component } from 'react';
import {tripData} from '../../../tripRoom/data/tripRoomDynamicData';
import {friendsData} from '../../../tripRoom/data/friendsDummyData';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const FriendNights = ({friendsData}) => {
  //var friendsNights = function() {
  console.log(friendsData);
  var keys = Object.keys(friendsData);
  if (keys.length !== 0) {
    var lowest = friendsData[keys[0]].duration;
    for (var i = 0; i < keys.length; i++) {
      if(lowest > friendsData[keys[i]].duration) {
          lowest = friendsData[keys[i]].duration;
      }
    }
    var highest = friendsData[keys[0]].duration;
    for (var i = 0; i < keys.length; i++) {
      if(highest < friendsData[keys[i]].duration) {
          highest = friendsData[keys[i]].duration;
      }
    }
    return (
     <div className="friendsBox col s5">
         <p className="icon-block orange-text darken-2">Your friends chose between {lowest} and {highest} nights for their trip</p>
    </div> 
    )
  }  
};


class DurationsCard extends Component {
  constructor(props) {
    super(props);
    this.changeDuration = this.changeDuration.bind(this);
  }    

  changeDuration(e) {
    var updatedBudget = parseInt(e.target.value) * (this.state.hotelBudget + this.state.activitiesBudget) + this.state.flightBudget;
    this.setState({
      totalBudget: updatedBudget,
      duration: parseInt(e.target.value),
    });
  }


        render() {
          return (
            <li>
              <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">schedule</i>Durations</strong>
              </div>
              <div className="collapsible-body">
                <div className="row">
                  <div className="input-field col s7">
                    <p>Tell us how many nights you want to spend on your getaway?</p>
                      <form action="#">
                        <p id="totalNights" className="bling green-text darken-2"><strong>Nights: {this.state.duration} </strong></p>
                      </form>
                      <form action="#">
                      <p className="range-field">
                      <input type="range" min="1" max="28" onChange={this.changeDuration} value={this.state.duration} />
                      </p>
                      </form>
                    </div>
                    
                        <FriendNights friendsData={this.state.friendsData}/>
                    
                  </div>
                </div>
              </li>
            )};  
          };

export default DurationsCard;              
