import React from 'react';
import BuddyVotesWindow from './BuddyVotesWindow.jsx';
import BookmarkMessages from './BookmarkMessages.jsx';

// TripRoom > TripRoomComponents > You Are Here (tripBookmarksList)

var TripBookmarksList = function(
  {bookmarks, profile, expediaParams, updateBookmarkVote, addBookmarkComment}) {

  var bookmarksList = bookmarks.map( (bookmark) => (
    <Bookmark
      bookmark={bookmark}
      profile={profile}
      expediaParams={expediaParams}
      updateBookmarkVote={updateBookmarkVote}
      addBookmarkComment={addBookmarkComment}
      key={bookmark.bookmarkId} />
  ));

  return  (
    <div className="row">
      {bookmarksList}
    </div>
  );
};


module.exports = TripBookmarksList;