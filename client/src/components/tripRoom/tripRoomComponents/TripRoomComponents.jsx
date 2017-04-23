import React, { Component } from 'react';
import {hotelRecomendations} from './data/tripRoomDummyData';
import TripRecomendationsCards from './newRecomendations/tripRecomendationsCards.jsx';
import GroupPreferencesBar from './groupPreferences/groupPreferencesBar.jsx';
import TripBookmarksList from './bookmarksView/tripBookmarksList.jsx';

// tripData  = {
//   commonDates:  { //Single Object
//     beginning: '4/29/2017', //STRING
//     duration: '4', //NUMBER
//     ending: '5/12/2017' //STRING
//   },
//   commonLocations: [ //ARRAY of STRINGs
//     'cityName1',
//     'cityName2'
//   ],
//   averageNightlyHotelBudget: 127.00, //NUMBER
//   buddyList: [{
//       name: 'Lou',
//       email: 'formMasterLou@gmail.com',
//     }],
//   bookmarks: [{
//     bookmarkID: 1492888181571, //assign value based on exact time that bookmark was created date.now()
//     tripId: 23, //passed in from props of trip room tripId
//     bookmarkerName: 'Lou',
//     boormarkerNote: 'stringComment',
//     bookmarkedHotelId: 'expediaHotelString',
//     bookmarkComments: [{
//       buddyName: 'Lou',
//       buddyEmail: 'formMasterLou@gmail.com',
//       date: 1492888181571,
//       comment: 'messageMadeUnderBookmark'}
//     ],
//     buddyVotes: [{
//       buddyName: 'Lou',
//       buddyEmail: 'formMasterLou@gmail.com',
//       buddyVote: -1
//     }]
//   }]
// }



//props: tripData, tripId, profile
class TripRoomComponents extends Component {

  constructor (props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.addBookmark = this.addBookmark.bind(this);
    this.updateBookmarkVote = this.updateBookmarkVote.bind(this);
    this.addBookmarkComment = this.addBookmarkComment.bind(this);
    this.state = {
      bookmarks: props.tripData.bookmarks,
      hotelRecomendations: hotelRecomendations,
      locations: props.tripData.commonLocations, //['Cabo San Lucas']
      selectedLocation: '',
      beginning: props.tripData.commonDates.beginning , //'4/29/2017'
      duration: props.tripData.commonDates.duration, //4
      ending: props.tripData.commonDates.ending, //'5/12/2017'
      averageNightlyHotelBudget: props.tripData.averageNightlyHotelBudget //127
    };
  }

  setLocation(selection) {
    this.setState({
      selectedLocation: selection
    });
  }

  // {
  //   bookmarkComments: [{
  //     buddyName: 'Lou', //givenName from Auth0 profile
  //     buddyEmail: 'formMasterLou@gmail.com',
  //     date: 1492888181571 //date Number retrieved programaatically at time of post
  //     comment: 'messageMadeUnderBookmark'}
  //   ],
  //   buddyVotes: [{
  //     buddyName: 'Lou',
  //     buddyEmail: 'formMasterLou@gmail.com',
  //     buddyVote: -1
  //   }],

  // }

  addBookmark(newBookmark) {
    newBookmark['bookmarkId'] = Date.now();
    newBookmark['buddyVotes'] = this.props.tripData.buddyList.map((buddy) => ({
      buddyName: buddy.name,
      buddyEmail: buddy.email,
      buddyVote: 0
    }));
    newBookmark['tripId'] = this.props.tripId;
    newBookmark['bookmarkerName'] = this.props.profile.given_name;
    newBookmark['bookmarkComments']= [];

    this.setState({
      bookmarks: this.state.bookmarks.concat(newBookmark)
    });

    //@back_end_magicician_preston
    //fire off ajax request to add new bookmark to db here by calling the function below
    //this.addNewBookmarktoDB(newBookmark);
  }


  addNewBookmarktoDB(newBookmark) {
    // this might gonna need some work....

    // $.ajax({
    //   type: 'POST',
    //   url: '/addNewBookmarktoDB',
    //   dataType: 'json',
    //   data: newBookmark,
    //   success: function() {
    //     console.log('Bookmark Added');
    //   }.bind(this)
    // });
  }

  updateBookmarkVote(bookmarkId, updatedBuddyVote) {

    var updatedBookmarks = this.state.bookmarks.map((bookmark) => {
      if (bookmark.bookmarkId === bookmarkId) {
        bookmark.buddyVotes.forEach( (buddyVoteObj) => {
          if(buddyVoteObj.buddyName === updatedBuddyVote.buddyName) {
            buddyVoteObj.buddyVote = updatedBuddyVote.buddyVote;
          }
        });
      }
      return bookmark;
    });

    this.setState({
      bookmarks: updatedBookmarks
    });

    //@back_end_magicician_preston
    //fire off ajax requests to update bookmark votes by uncommenting function below
    this.updateBookmarkVoteInDb(updatedBuddyVote)
  }



  //fire off ajax requests to update bookmark votes
  var updateBookmarkVoteInDb(updatedBuddyVote){

    var dataToSent = {
      bookmarkId: 1231231231,
      updatedBuddyVote : updatedBuddyVote
    }

    console.log('ready to send off AJAX request to update bookmark in DB');
    console.log(dataToSent);

    // $.ajax({
    //   type: 'POST',
    //   url: '/updateBookmarkVote',
    //   dataType: 'json',
    //   data: dataToSent
    // }.bind(this));
  }

  addBookmarkComment(bookmarkId, newComment){
    var updatedBookmarks = this.state.bookmarks.map((bookmark) => {
      if (bookmark.bookmarkId === bookmarkId) {
        bookmark.bookmarkComments.push(newComment);
      }
      return bookmark;
    });

    this.setState({
      bookmarks: updatedBookmarks
    });

    //@back_end_magicician_preston
    //fire off ajax requests to update bookmark comments by uncommenting function below
    //this.addCommentToBookmarkInDb(newComment)
  }

  //fire off ajax requests to update bookmark comments
  addCommentToBookmarkInDb(newComment){
    var dataToSent = {
      bookmarkId: this.props.bookmark.bookmardId,
      commentObj: newComment
    };
    $.ajax({
      type: 'POST',
      url: '/addCommentToBookmark',
      dataType: 'json',
      data: dataToSent
    }.bind(this));
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
          bookmarks={this.state.bookmarks}
          profile={this.props.profile}
          expediaParams={this.state}
          updateBookmarkVote={this.updateBookmarkVote}
          addBookmarkComment={this.addBookmarkComment}
        />
      </div>
    );
  }
};

export default TripRoomComponents;