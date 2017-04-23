import React, { Component } from 'react';

// TripBookmarksList > Bookmark > BookmarkComments > You Are Here (BookmarkCommentsList)

var BookmarkCommentsList = function({ comments }) {

  var commentsList = comments.slice().reverse().map((comment, index) => (
    <li className="collection-item bookmark-comment" key={index}>
      <span className="author">{comment.buddyName}</span>
      <span className="content">{comment.comment}</span>
    </li>
  ));

  return(
    <ul className="collection">
      {commentsList}
    </ul>
  );
}

module.exports = BookmarkCommentsList;