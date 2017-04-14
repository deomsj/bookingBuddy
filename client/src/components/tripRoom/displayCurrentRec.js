import React from 'react';
//////////////////////////////////
// Display Current Recomendations
//////////////////////////////////

var DisplayCurrentRec = ({currentRec}) => (
  <div>
    <div className="card-image">
      <img src={currentRec.Image} alt="picture" />
      <span className="card-title">{currentRec.HotelName}</span>
    </div>
    <div className="card-content">
      <p><i className="material-icons orange-text">star</i>{currentRec.StarRating}</p>
      <p>{currentRec.Description}</p>
      <p>${currentRec.Price} total per person</p>
    </div>
  </div>
);

module.exports = DisplayCurrentRec;