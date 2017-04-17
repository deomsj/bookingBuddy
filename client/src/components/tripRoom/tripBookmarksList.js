import React from 'react';
import BuddyVotesWindow from './BuddyVotesWindow';

var TripBookmarksList = function({bookmarkedTrips}) {

  var bookmarksList = bookmarkedTrips.map(bookmark => (
    <div key={'' + bookmark.hotelRecomendationId} className="row">
      <div className="col s12 m6">
        <img src={bookmark.hotelRecomendationObj.Image} style={{height:'300px'}}alt="picture"/>
        <span>{bookmark.hotelRecomendationObj.HotelName}</span>
        <p>{bookmark.bookmarkComment}</p>
      </div>
      <BuddyVotesWindow buddyVotes={bookmark.buddyVotes} className="col s12 m6"/>
    </div>
  ));

  return  (
    <div>
      {bookmarksList}
    </div>
  );
};


// hotelRecomendationObj
  // HotelName
  // StarRating
  // Description
  // Image
// bookmarkComment



module.exports = TripBookmarksList;