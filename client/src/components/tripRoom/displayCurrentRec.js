import React, { Component } from 'react';

//////////////////////////////////
// Display Current Recomendations
//////////////////////////////////

var countStars = function(stars) {
  var string = '';

  for (var i = 0; i < Math.floor(stars); i++) {
    string += 'star ';
  }
  return string;
};

var hasRemainder = function(stars) {
  if (stars % 1 !== 0) {
    return '1/2'
  } else {
    return '';
  }
}

var DisplayCurrentRec = function({currentRec}) {
  return (
    <div>
      <div className="card-image">
        <img src={currentRec.Image} alt="picture" />
        <span className="card-title">{currentRec.HotelName}</span>
      </div>
      <div className="card-content">
        <p><i className="material-icons orange-text">{countStars(currentRec.StarRating)}</i>{hasRemainder(currentRec.StarRating)}</p>
        <p>{currentRec.Description}</p>
        <p>${currentRec.Price} total per person</p>
      </div>
    </div>
  );
}

module.exports = DisplayCurrentRec;
