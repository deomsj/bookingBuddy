import React from 'react';
import {tripData, hotelRecomendations} from './tripRoomDummyData';
import TripRecomendationsCards from './tripRecomendationsCards.jsx';
import GroupPreferencesBar from './groupPreferencesBar';

/////////////////////////
// Trip Room Components
/////////////////////////

class TripRoomComponents extends React.Component {

  constructor (props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.addBookmark = this.addBookmark.bind(this);
    this.state = {
      priceRange: props.tripData.priceRange,
      dateRange: props.tripData.dateRange,
      locations: props.tripData.locations,
      selectedLocation: '',
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
    this.setState({
      bookmarkedTrips: this.state.bookmarkedTrips.concat(newBookmark)
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
      </div>

      //
      // <TripBookmarksList
      //   bookmarkedTrips=""
      // />
    );
  }

};

class TripRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var obj = {};
    $.ajax({
      type: 'POST',
      url: '/getTotal',
      dataType: 'json',
      data: {'id': 1},
      success: function(comments) {
        obj['sum'] = comments.sum;
        console.log(comments, 'RESPONSE!');
        this.setState({budgetSum: comments.sum});
      }.bind(this)
    });
    $.ajax({
      type: 'POST',
      url: '/commonTrip',
      dataType: 'json',
      data: {'id': 1},
      success: function(comments) {
        obj.location = comments.commonTrips;
        console.log(comments, 'COMMON');
        this.setState({commonLocation: comments.commonTrips});
      }.bind(this)
    });
    $.ajax({
      type: 'POST',
      url: '/commonDate',
      dataType: 'json',
      data: {'id': 1},
      success: function(comments) {
        obj.dates = [comments.beginning, comments.ending, comments.duration];
        console.log(comments, 'COMMON DATES');
        this.setState({commonDateB: comments.beginning, commonDateE: comments.ending});
      }.bind(this)
    });

    setTimeout(function() {
      $.ajax({
        type: 'POST',
        url: '/hotwire',
        dataType: 'json',
        data: obj,
        success: function(data) {
          console.log(data);
        }.bind(this)
      });
    }, 1000);
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

  renderComment({body, author}) {
    return (
      <div>
        <li></li>;
      </div>
    );
  }
}
export default TripRoom;

