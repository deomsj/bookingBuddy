import React from 'react';
import BuddyVoteSlider from './BuddyVoteSlider';

var BuddyVotesWindow = function ({bookmarkId, buddyVotes, updateBookmarkVote}) {
  var buddySliders = buddyVotes.map(buddyVoteObj => (
    <BuddyVoteSlider bookmarkId={bookmarkId} buddyVoteObj={buddyVoteObj} key={buddyVoteObj.buddyName} updateBookmarkVote={updateBookmarkVote} />
  ));

  return (
    <div>
      {buddySliders}
    </div>
  );
};


module.exports = BuddyVotesWindow;
