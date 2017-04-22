import React, { Component } from 'react';
import BookmarkMessagesList from './BookmarkMessagesList.jsx';

// TripRoom > TripRoomComponents > tripBookmarksList > Your Are Here (BookmarkMessages)

class BookmarkMessages extends Component {
  constructor(props) {
    super(props);

    this.bookmarkMessageChange = this.bookmarkMessageChange.bind(this);
    this.bookmarkMessageSubmit = this.bookmarkMessageSubmit.bind(this);

    this.state = {
      bookmarkMessages: [],
      bookmarkMessageText: ''
    };
  }

  bookmarkMessageChange(e) {
    this.setState({
      bookmarkMessageText: e.target.value
    });
  }

  bookmarkMessageSubmit(e) {
    e.preventDefault();
    var newMessage = {
      user: 'Nate',
      content: this.state.bookmarkMessageText,
      id: Date.now()
    };

    this.setState((prevState) => ({
      bookmarkMessages: prevState.bookmarkMessages.concat(newMessage),
      bookmarkMessageText: ''
    }));
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
            <form onSubmit={this.bookmarkMessageSubmit}>
              <input
                onChange={this.bookmarkMessageChange}
                value={this.state.bookmarkMessageText}
              />
              <button>{'Add Message'}</button>
            </form>
            <BookmarkMessagesList messages={this.state.bookmarkMessages} />
          </div>
        </li>
      </ul>
    );
  }

}

export default BookmarkMessages;