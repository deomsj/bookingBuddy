import React from 'react';
import BuddyVotesWindow from './BuddyVotesWindow.jsx';
import BookmarkMessages from './BookmarkMessages.jsx';

var TripBookmarksList = function({bookmarkedTrips, updateBookmarkVote}) {

  var bookmarksList = bookmarkedTrips.map( (bookmark, bookmarkId) => (
    <div key={bookmarkId} className="row">
      <div className="col s12 m7">
        <div className="col s12 m7">
          <h5>{bookmark.hotelRecomendationObj.HotelName}</h5>
          <p>{bookmark.bookmarkComment}</p>
        </div>
        <div className="col s12 m5">
          <img src={bookmark.hotelRecomendationObj.Image} style={{'maxHeight':'300px', 'maxWidth':'100%'}} alt="picture"/>
        </div>
      </div>
      <div className="col s12 m5">
        <BuddyVotesWindow
          bookmarkId={bookmarkId}
          buddyVotes={bookmark.buddyVotes}
          updateBookmarkVote={updateBookmarkVote}
        />
      </div>
      <div className="row">
        <div className="col s12">
          <BookmarkMessages />
        </div>
      </div>
    </div>
  ));

  return  (
    <div className="row">
      {bookmarksList}
    </div>
  );
};



module.exports = TripBookmarksList;