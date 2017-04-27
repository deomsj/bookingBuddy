import React, { Component } from 'react';
import BuddyVotesWindow from './BuddyVotesWindow.jsx';
import BookmarkComments from './BookmarkComments.jsx';

// TripRoom > TripRoomComponents > TripBookmarksList > You Are Here (Bookmark)
//bookmark object passed in as props

// bookmark = {
//   bookmarkID: 1492888181571,
//   tripId: 23,
//   bookmarkerName: 'Lou',
//   boormarkerNote: 'stringComment',
//   bookmarkedHotelId: 'expediaHotelString'
//   bookmarkComments: [{
//     buddyName: 'Lou',
//     buddyEmail: 'formMasterLou@gmail.com',
//     date: 1492888181571
//     comment: 'messageMadeUnderBookmark'}
//   ],
//   buddyVotes: [{
//     buddyName: 'Lou',
//     buddyEmail: 'formMasterLou@gmail.com',
//     buddyVote: -1
//   }]
// }



// props => bookmark, profile, expediaParams, updateBookmarkVote, addBookmarkComment
class Bookmark extends Component {

  constructor(props) {
    super(props);
    this.state= {
      hotelName: '',
      image: '',
      price: '',
      stars: '',
      description: 'This will be a decription of the hotel'
    }
  }

  componentDidMount(){
    // console.log('When rendering bookmarks, we will query expedia to get current hotel data using bookmarkedHotelId: ',
    //                this.props.bookmark);
    var expediaBookmarkQueryParams = {
      beginningDate : this.props.expediaParams.beginning,
      endingDate : this.props.expediaParams.ending,
      hotelIdList : this.props.bookmark.bookmarkedHotelId
    };

    var handleExpediaBookmarkQueryResults = function(expediaResults){
      // console.log('handling results from expedia', expediaResults);
      var returnedFromExpedia = expediaResults.HotelSummary;
      this.setState({
        hotelName: returnedFromExpedia.name,
        image: returnedFromExpedia.thumbNailUrl,
        price: returnedFromExpedia.price,
        stars: returnedFromExpedia.stars,
        description: returnedFromExpedia.description
      });
    }.bind(this);

    $.ajax({
      type: 'POST',
      url: '/expedia-bookmarks',
      dataType: 'json',
      data: expediaBookmarkQueryParams,
      success: function(expediaResults) {
        handleExpediaBookmarkQueryResults(expediaResults);
      }.bind(this)
    });
  }

  render(){
    return (
      <li className="collection-item trip-bookmark">
        <div className="row bookmark-main">
          <div className="col s12 l6">
            <div className="row">
              <h5>{this.state.hotelName}</h5>
            </div>
            <div className="row">
              <div className="col s3">
                <img src={'http://media.expedia.com' + this.state.image} style={{'maxHeight':'300px', 'maxWidth':'100%'}} alt="picture"/>
              </div>
              <div className="s9">
                <p>{this.props.bookmark.bookmarkerNote}</p>
              </div>
            </div>
          </div>
          <div className="col s12 l6">
            <BuddyVotesWindow
              bookmarkID={this.props.bookmark.bookmarkID}
              buddyVotes={this.props.bookmark.buddyVotes}
              updateBookmarkVote={this.props.updateBookmarkVote}
            />
          </div>
        </div>
        <div className="row bookmark-comments">
          <div className="col s12">
            <BookmarkComments
              profile={this.props.profile}
              bookmark={this.props.bookmark}
              addBookmarkComment={this.props.addBookmarkComment}
            />
          </div>
        </div>
      </li>
    );
  }
}


module.exports = Bookmark;