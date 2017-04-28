import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var IntroMessageSection = function() {

  return(
    <div className="parallax-container homepage-intro">
      <div className="parallax">
        <img src="https://images.trvl-media.com/media/content/expus/graphics/launch/activity1320x742.jpg" alt="photo" />
      </div>
      <div className="row center">
        <h1 className="header center orange-text">Planning a trip with friends? Let us Help!</h1>
        <h5 className="header col s12 light">Booking Buddy makes planning a trip with your friends a fun and sociable experience</h5>
      </div>
      <div className="row center">
        <Link className="btn-large waves-effect waves-light orange" to="/start-planning">Start Planning!</Link>
      </div>
    </div>
  );
}

module.exports = IntroMessageSection;