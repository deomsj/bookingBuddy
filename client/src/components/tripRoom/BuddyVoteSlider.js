import React from 'react';

var VoteButton = function ({text, selected}) {
  if (selected){
    return (<button className="waves-effect waves-light green darken-2 btn">{text}</button>);
  }

  return (<button className="waves-effect waves-light green lighten-4 btn">{text}</button>);
};




var BuddyVoteSlider = function ({buddyVoteObj}) {

  var vote = buddyVoteObj.buddyVote;

  var updateVote = function(num) {
    console.log(num);
  };

  return (
    <div>
      <span className="col s1">{buddyVoteObj.buddyName} : </span>
      <VoteButton text="I'm In!" selected={vote === 1} onClick={()=>updateVote(1)} />
      <VoteButton text="Maybe" selected={vote === 0} onClick={()=>updateVote(0)} />
      <VoteButton text="Not for Me" selected={vote === -1} onClick={()=>updateVote(-1)} />
    </div>
  );
};





module.exports = BuddyVoteSlider;
