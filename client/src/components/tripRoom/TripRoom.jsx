import React from 'react';
import {tripData, hotelRecomendations} from './tripRoomDummyData';
import {expediaData, hotwireData} from './tripRoomDynamicData';
import TripRecomendationsCards from './tripRecomendationsCards.jsx';
import GroupPreferencesBar from './groupPreferencesBar';

import Promise from 'bluebird';
// I couldn;t figure out to do this with import
var getTotal = Promise.promisify(require("./APIsRouter").getTotal);
var postCommonTrip = Promise.promisify(require("./APIsRouter").postCommonTrip);
var postCommonDate = Promise.promisify(require("./APIsRouter").postCommonDate);
var postToHotWire = Promise.promisify(require("./APIsRouter").postToHotWire);

// Used for testing
import $ from 'jquery';

/////////////////////////
// Trip Room Components
/////////////////////////

class TripRoomComponents extends React.Component {

  constructor (props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.addBookmark = this.addBookmark.bind(this);
    this.updateBookmarkVote = this.updateBookmarkVote.bind(this);
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

}


class TripRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  {
    var obj = {};


    getTotal(obj)
    .then(postCommonTrip(obj))
    .then(postCommonDate(obj))
    .then(postToHotWire(obj));

  }

  render() {
    return (
      <div>
        <TripRoomComponents
          tripData={tripData}
          hotelRecomendations={hotelRecomendations}
        />
      </div>
    );
  }

            // <iframe src={this.state.url} width='750' height='350'></iframe>
          // <img src={this.state.hotelImage}/>

  // renderComment({body, author}) {
  //   return (
  //     <div>
  //       <li></li>;
  //     </div>
  //   );
  // }
}
export default TripRoom;

