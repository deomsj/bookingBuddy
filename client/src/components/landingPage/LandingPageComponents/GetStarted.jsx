import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var GetStartedSection = function() {

  return(
    <div className="parallax-container homepage-cta homepage-section">
      <div className="parallax">
        <img src="/styles/images/bookingbuddy-get-started.jpg" alt="photo" />
      </div>
      <div className="row center">
        <h4 className="header col s12 white-text">What are you waiting for?</h4>
      </div>
      <div className="row center">
        <Link id="download-button" className="btn-large waves-effect waves-light orange" to="/start-planning">Start Planning!</Link>
      </div>
    </div>
  );
}

module.exports = GetStartedSection;