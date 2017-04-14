import React from 'react';
//////////////////////////////////
// Display Current Recomendations
//////////////////////////////////

var Stars = ()

var DisplayCurrentRec = ({currentRec}) => (
  <div>
    <div className="card-image">
      <img src={currentRec.Image} alt="picture" />
      <span className="card-title">{currentRec.HotelName}</span>
    </div>
    <div className="card-content">
      <p><Stars /></p>
      <p>{currentRec.Description}</p>
      <p>${currentRec.Price} total per person</p>
    </div>
  </div>
);

module.exports = DisplayCurrentRec;

// <i className="material-icons orange-text">star</i>{currentRec.StarRating}