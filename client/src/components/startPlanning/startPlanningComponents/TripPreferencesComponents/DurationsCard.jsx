import React, { Component } from 'react';
import {tripData} from '../../../tripRoom/data/tripRoomDynamicData';
//import {friendsData} from '../../../tripRoom/data/friendsDummyData';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// const FriendNights = ({data}) => {
//   //var friendsNights = function() {
//   //console.log(data);
//   var keys = Object.keys(data);
//   if (keys.length !== 0) {
//     var lowest = data[keys[0]].duration;
//     for (var i = 0; i < keys.length; i++) {
//       if(lowest > data[keys[i]].duration) {
//           lowest = data[keys[i]].duration;
//       }
//     }
//     var highest = data[keys[0]].duration;
//     for (var i = 0; i < keys.length; i++) {
//       if(highest < data[keys[i]].duration) {
//           highest = data[keys[i]].duration;
//       }
//     }
//     return (
//      <div className="friendsBox col s5">
//          <p className="icon-block orange-text darken-2">Your friends chose between {lowest} and {highest} nights for their trip</p>
//     </div> 
//     )
//   }  
// };


const FriendNights = ({friendsData}) => {
  //var friendsNights = function() {
  //console.log(friendsData);
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

// class DurationsCard extends Component {
//   constructor(props) {
//     super(props);
//     this.changeDuration = this.changeDuration.bind(this);
//   }    

  // changeDuration(e) {
  //   var updatedBudget = parseInt(e.target.value) * (this.props.hotelBudget + this.props.activitiesBudget) + this.props.flightBudget;
  //   this.setState({
  //     totalBudget: updatedBudget,
  //     duration: parseInt(e.target.value),
  //   });
  // }

var DurationsCard = function({friendsData, duration, changeDuration}) {
  return (
    <li className="durationsAccordion">
      <div className="collapsible-header">
        <strong><i className="material-icons green-text darken-2">schedule</i>Durations</strong>
      </div>
      <div className="collapsible-body">
        <div className="row">
          <div className="input-field col s7">
            <p>Tell us how many nights you want to spend on your getaway?</p>
              <form action="#">
                <p id="totalNights" className="bling green-text darken-2"><strong>Nights: {duration} </strong></p>
              </form>
              <form action="#">
              <p className="range-field">
              <input type="range" min="1" max="28" onChange={changeDuration} value={duration} />
              </p>
              </form>
            </div>
            
                <FriendNights friendsData={friendsData}/>
            
          </div>
        </div>
      </li>
    )};    


export default DurationsCard;              
