import React, { Component } from 'react';
import BookmarkMessagesList from './BookmarkMessagesList.jsx';

// TripBookmarksList > Bookmark > You Are Here (BookmarkComments)

class BookmarkComments extends Component {
  constructor(props) {
    super(props);
    this.bookmarkCommentChange = this.bookmarkCommentChange.bind(this);
    this.bookmarkCommentSubmit = this.bookmarkCommentSubmit.bind(this);
    this.state = {
      bookmarkCommentText: ''
    };
  }

  bookmarkCommentChange(e) {
    this.setState({
      bookmarkCommentText: e.target.value
    });
  }

  bookmarkCommentSubmit(e) {
    e.preventDefault();
    var newComment = {
      buddyName: this.props.profile.given_name,
      buddyEmail: this.props.profile.email,
      date: Date.now(),
      comment: this.state.bookmarkCommentText,
    };

    this.setState({
      bookmarkCommentText: ''
    });

    this.props.addBookmarkComment(this.props.bookmark.bookmarkId, newComment);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  render() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">MESSAGES</div>
          <div className="collapsible-body">
            <form onSubmit={this.bookmarkCommentSubmit}>
              <input
                onChange={this.bookmarkCommentChange}
                value={this.state.bookmarkCommentText}
              />
              <button>{'Add Comment'}</button>
            </form>
            <BookmarkCommentsList comments={this.props.bookmark.bookmarkComments} />
          </div>
        </li>
      </ul>
    );
  }

}

export default BookmarkComments;