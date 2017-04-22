import React, { Component } from 'react';
import TripRecomendationsCards from './newRecomendations/tripRecomendationsCards.jsx';
import GroupPreferencesBar from './groupPreferences/groupPreferencesBar.jsx';
import TripBookmarksList from './bookmarksView/tripBookmarksList.jsx';

class TripRoomComponents extends Component {

  constructor (props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.addBookmark = this.addBookmark.bind(this);
    this.updateBookmarkVote = this.updateBookmarkVote.bind(this);
    // this.handleBookmarkMessageChange = this.handleBookmarkMessageChange.bind(this);
    // this.handleBookmarkMessageSubmit = this.handleBookmarkMessageSubmit.bind(this);
    this.state = {
      priceRange: props.tripData.priceRange,
      dateRange: props.tripData.dateRange,
      locations: props.tripData.locations,
      selectedLocation: '',
      url:'',
      bookmarkedTrips: props.tripData.bookmarkedTrips.slice()
    };
  }

  setLocation(selection) {
    this.setState({
      selectedLocation: selection
    });
  }
//ajax call to expedia
  addBookmark(newBookmark) {
    newBookmark['buddyVotes'] = this.props.tripData.buddyList.map((buddyName) => ({
      buddyName: buddyName,
      buddyVote: 0
    }));
    newBookmark['bookmarkId'] = this.state.bookmarkedTrips.length;

    this.setState({
      bookmarkedTrips: this.state.bookmarkedTrips.concat(newBookmark)
    });
  }

  updateBookmarkVote(bookmarkId, buddyName, newVote) {

    var updatedBookmarks = this.state.bookmarkedTrips.map((bookmark) => {
      if (bookmark.bookmarkId === bookmarkId) {
        bookmark.buddyVotes.forEach( (buddyVoteObj) => {
          if(buddyVoteObj.buddyName === buddyName) {
            buddyVoteObj.buddyVote = newVote;
          }
        });
      }
      return bookmark;
    });

    this.setState({
      bookmarkedTrips: updatedBookmarks
    });
  }

  // handleBookmarkMessageChange(e) {
  //   this.setState({
  //     bookmarkMessageText: e.target.value
  //   });
  // }

  // handleBookmarkMessageSubmit(e) {
  //   e.preventDefault();
  //   var newMessage = {
  //     user: 'Nate',
  //     content: this.state.bookmarkMessageText,
  //     id: Date.now()
  //   };

  //   this.setState((prevState) => ({
  //     bookmarkMessages: prevState.bookmarkMessages.concat(newMessage),
  //     bookmarkMessageText: ''
  //   }));
  // }

  render() {

    return (
      <div className="container">
        <h1 className="orange-text darken-2">{this.props.tripData.tripName}</h1>
        <GroupPreferencesBar
          priceRange={this.state.priceRange}
          dateRange={this.state.dateRange}
          locations={this.state.locations}
          setLocation={this.setLocation}
        />
        <TripRecomendationsCards
          hotelRecomendations={this.props.hotelRecomendations}
          addBookmark={this.addBookmark}
        />
        <TripBookmarksList
          bookmarkedTrips={this.state.bookmarkedTrips}
          updateBookmarkVote={this.updateBookmarkVote}
        />
      </div>
    );
  }
};

export default TripRoomComponents;