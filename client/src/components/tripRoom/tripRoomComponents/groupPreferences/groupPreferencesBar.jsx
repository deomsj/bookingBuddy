import React from 'react';
import DropDownFilter from './dropDownFilter.jsx';
/////////////////////////
// Group Preferences Bar
/////////////////////////

var GroupPreferencesBar =
  ({averageNightlyHotelBudget, beginning, ending, locations, selectedLocation, setLocation}) => (

  <div className="preferences-bar">
    <div className="row">
      <div className="col s2">
        <span className="preferences-price">
          <i className="material-icons green-text">credit_card</i>${averageNightlyHotelBudget}
        </span>
      </div>
      <div className="col s3">
        <span className="preferences-date">
          <i className="material-icons green-text">today</i>{beginning + ' - ' +ending}
        </span>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s3">
        <DropDownFilter locations={locations} selectedLocation={selectedLocation} setter={setLocation} />
      </div>
    </div>
    <p>
      <strong>Based on your group's preferences, we found all of these trips for you!</strong>
    </p>
  </div>
);

module.exports = GroupPreferencesBar;

