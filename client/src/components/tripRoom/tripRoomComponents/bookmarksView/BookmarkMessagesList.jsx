import React, { Component } from 'react';

var BookmarkMessagesList = function({ messages }) {

  var messagesList = messages.slice().reverse().map((message, index) => (
    <li className="collection-item bookmark-message" key={message.id}>
      <span className="author">{message.user}</span>
      <span className="content">{message.content}</span>
    </li>
  ));

  return(
    <ul className="collection">
      {messagesList}
    </ul>
  );
}

module.exports = BookmarkMessagesList;