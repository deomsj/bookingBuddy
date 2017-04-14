import React from 'react';
import DropDownFilter from './dropDownFilter.js';
/////////////////////////
// Group Preferences Bar
/////////////////////////

var GroupPreferencesBar = ({priceRange, dateRange, locations, setLocation}) => (
  <div>
    <div className="row">
      <div className="col s3">
        <span><i className="material-icons green-text">credit_card</i>{ priceRange }</span><br />
      </div>
      <div className="col s3">
        <span><i className="material-icons green-text">today</i>{dateRange}</span><br /><br />
      </div>
    </div>
    <span><strong>Based on your group's preferences, we found all of these trips for you!</strong>
      <DropDownFilter options={locations} setter={setLocation} />
    </span>
  </div>
);

module.exports = GroupPreferencesBar;

