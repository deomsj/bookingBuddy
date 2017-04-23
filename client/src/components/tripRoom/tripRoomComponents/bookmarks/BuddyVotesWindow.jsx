import React from 'react';
import BuddyVoteSlider from './BuddyVoteSlider.jsx';

var BuddyVotesWindow = function ({bookmarkID, buddyVotes, updateBookmarkVote}) {
  var buddySliders = buddyVotes.map( (buddyVoteObj, index) => (
    <BuddyVoteSlider bookmarkID={bookmarkID} buddyVoteObj={buddyVoteObj} key={index} updateBookmarkVote={updateBookmarkVote} />
  ));

  return (
    <div>
      {buddySliders}
    </div>
  );
};


module.exports = BuddyVotesWindow;
