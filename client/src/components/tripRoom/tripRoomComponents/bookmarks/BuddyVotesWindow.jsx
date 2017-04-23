import React from 'react';
import BuddyVoteSlider from './BuddyVoteSlider.jsx';

var BuddyVotesWindow = function ({bookmarkId, buddyVotes, updateBookmarkVote}) {
  var buddySliders = buddyVotes.map( (buddyVoteObj, index) => (
    <BuddyVoteSlider bookmarkId={bookmarkId} buddyVoteObj={buddyVoteObj} key={index} updateBookmarkVote={updateBookmarkVote} />
  ));

  return (
    <div>
      {buddySliders}
    </div>
  );
};


module.exports = BuddyVotesWindow;
