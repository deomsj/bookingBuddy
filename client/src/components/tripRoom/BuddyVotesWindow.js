import React from 'react';
import BuddyVoteSlider from './BuddyVoteSlider';

var BuddyVotesWindow = function ({buddyVotes}) {
  var buddySliders = buddyVotes.map(buddyVoteObj => (
    <BuddyVoteSlider buddyVoteObj={buddyVoteObj} key={buddyVoteObj.buddyName}/>
  ));

  return (
    <div>
      {buddySliders}
    </div>
  );
};


module.exports = BuddyVotesWindow;
