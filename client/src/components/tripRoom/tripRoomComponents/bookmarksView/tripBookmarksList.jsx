import React from 'react';
import BuddyVotesWindow from './BuddyVotesWindow.jsx';

var TripBookmarksList = function({bookmarkedTrips, updateBookmarkVote}) {

  var bookmarksList = bookmarkedTrips.map( (bookmark, bookmarkId) => (
    <div key={bookmarkId} className="card">
      <div className="card-image">
        <img src={bookmark.hotelRecomendationObj.Image} alt="picture"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5>{bookmark.hotelRecomendationObj.HotelName}</h5>
          <p>{bookmark.bookmarkComment}</p>
        </div>
        <div className="card-action">
          <BuddyVotesWindow bookmarkId={bookmarkId} buddyVotes={bookmark.buddyVotes} updateBookmarkVote={updateBookmarkVote}/>
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