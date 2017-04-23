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
    this.getUpToDateHotelInfoFromExpedia();
  }

  getUpToDateHotelInfoFromExpedia(){

    console.log('When rendering bookmarks, we will query expedia to get current hotel data using bookmarkedHotelId: ',
                   this.props.bookmark.bookmarkedHotelId);

    //Query Expedia API here to setState with current hotel data using:
      //this.props.bookmark.bookmarkedHotelId
      //this.props.expediaParams.beginning
      //this.props.expediaParams.duration
      //this.props.expediaParams.ending

    var returnedFromExpedia = {
      hotelName: 'hotel name',
      image: 'http://71.18.53.79/images/beijing-hotel.jpg',
      price: '$400.12',
      stars: 5,
      description: 'This will be a decription of the hotel'
    };

    this.setState({
      hotelName: returnedFromExpedia.hotelName,
      image: returnedFromExpedia.image,
      price: returnedFromExpedia.price,
      stars: returnedFromExpedia.stars,
      description: returnedFromExpedia.description
    });
  }

  render(){
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="col s12 m7">
            <h5>{this.state.hotelName}</h5>
            <p>{this.props.bookmark.boormarkerNote}</p>
          </div>
          <div className="col s12 m5">
            <img src={this.state.image} style={{'maxHeight':'300px', 'maxWidth':'100%'}} alt="picture"/>
          </div>
        </div>
        <div className="col s12 m5">
          <BuddyVotesWindow
            bookmarkID={this.props.bookmark.bookmarkID}
            buddyVotes={this.props.bookmark.buddyVotes}
            updateBookmarkVote={this.props.updateBookmarkVote}
          />
        </div>
        <div className="row">
          <div className="col s12">
            <BookmarkComments
              profile={this.props.profile}
              bookmark={this.props.bookmark}
              addBookmarkComment={this.props.addBookmarkComment}
            />
          </div>
        </div>
      </div>
    );
  }
}


module.exports = Bookmark;