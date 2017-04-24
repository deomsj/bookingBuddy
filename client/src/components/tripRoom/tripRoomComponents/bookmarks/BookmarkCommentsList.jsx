import React, { Component } from 'react';
import Moment from 'moment';

// TripBookmarksList > Bookmark > BookmarkComments > You Are Here (BookmarkCommentsList)

var BookmarkCommentsList = function({ comments }) {

  var commentsList = comments.slice().reverse().map((comment, index) => (
    <li className="collection-item bookmark-comment" key={index}>
      <div className="comment-header">
        <span className="author">{comment.buddyName}</span>
        <time className="datetime">{Moment(comment.date).fromNow()}</time>
      </div>
      <div className="rcomment-body">
        {comment.comment}
      </div>
    </li>
  ));

  return(
    <ul className="collection">
      {commentsList}
    </ul>
  );
}

module.exports = BookmarkCommentsList;