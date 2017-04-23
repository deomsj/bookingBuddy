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
    <div className="row">
      {bookmarksList}
    </div>
  );
};


module.exports = TripBookmarksList;