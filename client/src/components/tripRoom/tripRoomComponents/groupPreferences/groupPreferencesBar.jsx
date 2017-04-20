import React from 'react';
import DropDownFilter from './dropDownFilter.jsx';
import {tripData, userData} from '../../../tripRoom/data/tripRoomDynamicData';
/////////////////////////
// Group Preferences Bar
/////////////////////////
class ShowBudget extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  ComponentwillMount() {
    console.log(tripData.profile, "tripData");
  }

}
console.log(userData, "userData");


var GroupPreferencesBar = ({priceRange, dateRange, locations, setLocation}) => (
  <div className="preferences-bar">
    <div className="row">
      <div className="col s3">
        <span className="preferences-price"><i className="material-icons green-text">credit_card</i>priceRange </span>
      </div>
      <div className="col s3">
        <span className="preferences-date"><i className="material-icons green-text">today</i>{dateRange}</span>
      </div>
    </div>
    <span><strong>Based on your group's preferences, we found all of these trips for you!</strong>
      <DropDownFilter options={locations} setter={setLocation} />
    </span>
  </div>
);

module.exports = GroupPreferencesBar;

