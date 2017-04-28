import React from 'react';

var HowItWorksSection = function() {

  return(
    <div className="section">
      <div className="container">
        <div className="row">
          <h5 className="header col s12 light">We make it easy to find trips that your whole group can and wants to go on!</h5>
        </div>
        <div className="row">
          {/* BLOCK 1 */}
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center green-text darken-2"><i className="material-icons">location_on</i></h2>
              <h5 className="center">Location</h5>
              <p className="light">Choose one, or several locations where you'd like to travel. If you're friends have already chosen some locations, you can also choose from theirs. You can add to this list at any time. After that, everyone can vote on their favorites.</p>
            </div>
          </div>
          {/* BLOCK 2 */}
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center green-text darken-2"><i className="material-icons">today</i></h2>
              <h5 className="center">Date</h5>
              <p className="light">Which dates are you available? When you and your buddies pick dates, the whole group can see them in order to figure out what works best for everyone. Are your dates not working out? Just go back and modify them at any time.</p>
            </div>
          </div>
          {/* BLOCK 3 */}
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center bling-header green-text darken-2">$</h2>
              <h5 className="center">Budget</h5>
              <p className="light">Almost everyone has a budget. We promise not to make it awkward for you. Let us know how much you can spend and we'll find trip options that work for everyone, without breaking the bank.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = HowItWorksSection;