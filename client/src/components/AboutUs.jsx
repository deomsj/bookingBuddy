import React from 'react';

var AboutUs = function({trip}) {
  return (
    <div className="container">
      <h1 className="center orange-text">About Our App</h1>
      <p>
      Booking Buddy is a fantastic way for you and your friends to plan a trip together.  Why deal with the hassle of figuring out where to go, how much to spend, and what time works best for everyone’s schedule?  Booking Buddy is an app that you can use to kickoff a trip by choosing your preferences and then inviting your friends to do the same.  Booking Buddy will take all that information and distill it into a set of travel options that work for everyone.  Once you have a set of options to choose from, you and your friends can vote on the ones you like.  Use the Booking Buddy chat feature to discuss the options and come to a conclusion about the trip you’re ready to take as a group.  When ready, just click on the package that works for everyone and you’ll be redirected to Expedia where you can move forward with booking your trip.  It’s easy and more convenient than ever to book a trip with your friends using Booking Buddy.
      </p>
      <h1 className="center orange-text">The Booking Buddies Team</h1>
      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="https://avatars2.githubusercontent.com/u/22582962?v=3&u=babbac21d76d1ffcc63afeaf1f2d2431b6391843&s=400" alt="profile picture" />
              <span className="card-title">Max Berger</span>
            </div>
            <div className="card-action">
              <a href="https://github.com/Maxamillian" target="_blank">github.com/Maxamillian</a>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="https://avatars3.githubusercontent.com/u/6984832" alt="profile picture" />
              <span className="card-title">Nate Nault</span>
            </div>
            <div className="card-action">
              <a href="https://github.com/natenault" target="_blank">github.com/natenault</a>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="https://avatars1.githubusercontent.com/u/13724341?v=3&u=3c998d51ae3cb3c35b0b471fa4b13759f14e6a16&s=400" alt="profile picture" />
              <span className="card-title">Preston Moore</span>
            </div>
            <div className="card-action">
              <a href="https://github.com/caroham29" target="_blank">github.com/caroham29</a>
            </div>
          </div>
        </div>

        <div className="col s4 offset-s2">
          <div className="card">
            <div className="card-image">
              <img src="https://avatars3.githubusercontent.com/u/8452310?v=3&s=460" alt="profile picture" />
              <span className="card-title">Lou Kaileh</span>
            </div>
            <div className="card-action">
              <a href="https://github.com/lkaileh" target="_blank">github.com/lkaileh</a>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="https://avatars1.githubusercontent.com/u/20070114?v=3&s=400" alt="profile picture" />
              <span className="card-title">Jesse DeOms</span>
            </div>
            <div className="card-action">
              <a href="https://github.com/deomsj" target="_blank">github.com/deomsj</a>
            </div>
          </div>
        </div>
      </div>

      <p className="green-text darken-2">Booking Buddy, Inc. is the brainchild of a group of buddies who came together at Hack Reactor to build awesome websites.  The team consists of Maximillian Berger (Front-End and Deployment Wizard) Jesse DeOms (Scrum Master), Lou Kaileh(Product Owner), Preston Moore (Database Dynamo), Nate Nault (Routing and Authentication Genius)</p>
    </div>
  );
};

export default AboutUs;