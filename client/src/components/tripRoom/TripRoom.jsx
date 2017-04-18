import React from 'react';
import {tripData, hotelRecomendations} from './tripRoomDummyData';
import {expediaData, hotwireData} from './tripRoomDynamicData';
import TripRecomendationsCards from './tripRecomendationsCards.jsx';
import GroupPreferencesBar from './groupPreferencesBar';
import TripBookmarksList from './tripBookmarksList';

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

};


class TripRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   var obj = {};
  //   $.ajax({
  //     type: 'POST',
  //     url: '/getTotal',
  //     dataType: 'json',
  //     data: {'id': 1},
  //     success: function(comments) {
  //       obj['sum'] = comments.sum;
  //       console.log(comments, 'Sum...');
  //       this.setState({budgetSum: comments.sum});
  //     }.bind(this)
  //   });
  //   $.ajax({
  //     type: 'POST',
  //     url: '/commonTripLocations',
  //     dataType: 'json',
  //     data: {'id': 1},
  //     success: function(comments) {
  //       obj.location = comments.commonTrips;
  //       console.log(comments, 'Common trip(s)...');
  //       this.setState({commonLocation: comments.commonTrips});
  //     }.bind(this)
  //   });
  //   $.ajax({
  //     type: 'POST',
  //     url: '/commonTripDates',
  //     dataType: 'json',
  //     data: {'id': 1},
  //     success: function(comments) {
  //       obj.dates = [comments.beginning, comments.ending, comments.duration];
  //       console.log(comments, 'Common Date(s)');
  //       this.setState({commonDateB: comments.beginning, commonDateE: comments.ending});
  //     }.bind(this)
  //   });

  //   var holdThis = this;
  //   setTimeout(function() {
  //     $.ajax({
  //       type: 'POST',
  //       url: '/hotwire',
  //       dataType: 'json',
  //       data: obj,
  //       success: function(data) {
  //         console.log(data, "Hotwire Hotel Data...");
  //         tripData.url = data.Result[0].Url;
  //         hotwireData.data = data.Result;
  //         holdThis.setState({url:data.Result[0].Url})
  //       }.bind(this)
  //     });
  //   }, 1000);

  //   setTimeout(function() {
  //    $.ajax({
  //       type: 'POST',
  //       url: '/expedia',
  //       dataType: 'json',
  //       data: {location:holdThis.state.commonLocation},
  //       success: function(data) {
  //         console.log(data, "Expedia Hotel Data...");
  //         var qualityImage = data.HotelSummary[0].thumbNailUrl.split('').reverse().join('').replace(/t/i,'z');
  //         qualityImage = qualityImage.split('').reverse().join('');
  //         holdThis.setState({hotelImage:"http://images.trvl-media.com/"+qualityImage});
  //         expediaData.data = data.HotelSummary;
  //       }.bind(this)
  //     });
  //    }, 1000);

  // }

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

