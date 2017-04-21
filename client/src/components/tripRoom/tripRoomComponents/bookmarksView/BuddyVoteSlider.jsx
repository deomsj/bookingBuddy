import React from 'react';

var VoteButton = function ({text, selected, handleClick}) {
  if (selected){
    return (<button onClick={handleClick} className="green darken-2 btn">{text}</button>);
  }

  return (<button onClick={handleClick} className="green lighten-4 btn" style={{'padding':'5px 10px'}}>{text}</button>);
};


var BuddyVoteSlider = function ({bookmarkId, buddyVoteObj, updateBookmarkVote}) {
  var socket = io();

  var vote = buddyVoteObj.buddyVote;

  var updateVote = function(num) {
    updateBookmarkVote(bookmarkId, buddyVoteObj.buddyName, num);
    // emit vote here
    socket.emit('new vote', {
      bookmarkId: bookmarkId,
      buddyName: buddyVoteObj.buddyName,
      num: num
    });
  };

  // new function to listen for vote
  socket.on('new vote', function(data) {
    updateBookmarkVote(data.bookmarkId, data.buddyName, data.num);
  });

  var voteYes = function() {
    updateVote(1);
  };

  var voteMaybe = function() {
    updateVote(0);
  };

  var voteNo = function() {
    updateVote(-1);
  };

  return (
    <div className='row'>
      <span className='col s2'>{buddyVoteObj.buddyName} : </span>
      <VoteButton className='col s2' text="I'm In!" selected={vote === 1} handleClick={voteYes} />
      <VoteButton className='col s2' text="Maybe" selected={vote === 0} handleClick={voteMaybe} />
      <VoteButton className='col s2' text="Not for Me" selected={vote === -1} handleClick={voteNo} />
    </div>
  );
};





module.exports = BuddyVoteSlider;
