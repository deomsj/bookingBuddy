import React, { Component } from 'react';
import {tripData} from '../../../tripRoom/data/tripRoomDynamicData';
import {friendsData} from '../../../tripRoom/data/friendsDummyData';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class WhenCard extends Component {
  constructor(props) {
    super(props);
    this.changeBeginDate = this.changeBeginDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
  }    

  changeBeginDate(e) {
    console.log(e.target.value);
    this.setState({
      beginDate: e.target.value,
    });
  }
  changeEndDate(e) {
    this.setState({
      endDate: e.target.value,
    });
  }

        render() {
          return (
              <li>
                <div className="collapsible-header">
                <strong><i className="material-icons green-text darken-2">today</i>When</strong>
                </div>
                <div className="collapsible-body">
                  <div className="row">
                    <div className="col s12">
                      <p>Tell us when you would like to go on your trip?</p>
                    </div>
                  </div>
                  <div className="row">
                    <form action="#">
                    <div className="col s6">
                      <input type="date" className="datepicker" placeholder="Select a start date:" onChange={this.changeBeginDate} value={this.state.beginDate}></input>
                    </div>
                    </form>
                    <form action="#">
                    <div className="col s6">
                      <input type="date" className="datepicker" placeholder="Select an end date:" onChange={this.changeEndDate} value={this.state.endDate}></input>
                    </div>
                    </form>
                  </div>
                </div>
            </li>
          )};  
        };    

export default WhenCard;            
