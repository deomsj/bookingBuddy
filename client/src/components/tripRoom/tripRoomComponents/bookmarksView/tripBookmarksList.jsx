import React from 'react';
import BuddyVotesWindow from './BuddyVotesWindow.jsx';

var TripBookmarksList = function({bookmarkedTrips, updateBookmarkVote}) {

  var bookmarksList = bookmarkedTrips.map( (bookmark, bookmarkId) => (
    <div key={bookmarkId} className="row">
      <div className="col s12 m6">
        <h5>{bookmark.hotelRecomendationObj.HotelName}</h5>
        <div className="col s12 m6">
          <img src={bookmark.hotelRecomendationObj.Image} style={{'max-height':'300px', 'max-width':'100%'}} alt="picture"/>
        </div>
        <div className="col s12 m6">
          <p>{bookmark.bookmarkComment}</p>
        </div>
      </div>
      <div className="col s12 m6">
        <BuddyVotesWindow bookmarkId={bookmarkId} buddyVotes={bookmark.buddyVotes} updateBookmarkVote={updateBookmarkVote}/>
      </div>
    </div>
  ));

  return  (
    <div>
      {bookmarksList}
    </div>
  );
};



module.exports = TripBookmarksList;