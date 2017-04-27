import React from 'react';
import Bookmark from './Bookmark.jsx';

// TripRoom > TripRoomComponents > You Are Here (TripBookmarksList)

var TripBookmarksList = function(
  {bookmarks, profile, expediaParams, updateBookmarkVote, addBookmarkComment}) {

  var bookmarksList = [];
  if(bookmarks.length){
    bookmarksList = bookmarks.map( (bookmark, index) => (
      <Bookmark
        bookmark={bookmark}
        profile={profile}
        expediaParams={expediaParams}
        updateBookmarkVote={updateBookmarkVote}
        addBookmarkComment={addBookmarkComment}
        key={index} />
    ));
  }

  return  (
    <div className="section">
      <div className="row">
        <ul className="collection with-header">
          <li className="collection-header center-align"><h4>Trip Bookmarks</h4></li>
          {bookmarksList}
        </ul>
      </div>
    </div>
  );
};

module.exports = TripBookmarksList;