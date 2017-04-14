import React from 'react';

/////////////////////////
// MOCK Trip Room Data
/////////////////////////


var tripData = {
  tripId: 12345,
  tripName: 'Hiking Trip with the Guys',
  locations: ['Hawaii', 'Florida', 'Bahamas'],
  priceRange: '$1,500-$2,500',
  dateRange: '12/10 - 12/21',
  buddyList: ['Lou', 'Preston', 'Max', 'Nate', 'Jesse'],
  bookmarkedTrips: []
};

var hotelRecomendations = [{
  hotelRecomendationId: 12345,
  HotelName: 'Sagamore Pendry Baltimore',
  Price: 450.91,
  StarRating: 5,
  Description: 'where all the ballers and shot callers come to relax and recharge',
  Image: 'https://s3-media3.fl.yelpcdn.com/bphoto/8qcpzDf8VSeYxPtHG4Lu5g/o.jpg'
}, {
  hotelRecomendationId: 21218,
  HotelName: 'Photos for Hotel Indigo Baltimore Downtown',
  Price: 180.27,
  StarRating: 4.5,
  Description: 'calm and relaxing',
  Image: 'https://s3-media2.fl.yelpcdn.com/bphoto/FHD4nLq6s1C7itT-UNf6gQ/o.jpg'
}];
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
        <TripRecomendationsCarousel
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

}

/////////////////////////
// Trip Recomendations Carousel
/////////////////////////
  // hotelRecomendationId: 12345,
  // HotelName: 'Sagamore Pendry Baltimore',
  // Price: 450.91,
  // StarRating: 5,
  // Description: 'where all the ballers and shot callers come to relax and recharge',
  // Image: 'https://s3-media3.fl.yelpcdn.com/bphoto/8qcpzDf8VSeYxPtHG4Lu5g/o.jpg'

class TripRecomendationsCarousel extends React.Component {
  constructor (props) {
    super(props);
    this.bookmarkThisRec = this.bookmarkThisRec.bind(this);
    this.advanceToNextRec = this.advanceToNextRec.bind(this);
    this.state = {
      currentRecIndex: 0,
      bookmarkComment: ''
    };
  }

  advanceToNextRec() {
    var numberOfRecs = this.props.hotelRecomendations.length;
    var nextIndex;
    if (this.state.currentRecIndex < numberOfRecs - 1) {
      nextIndex = this.state.currentRecIndex + 1;
    } else {
      nextIndex = 0;
    }
    this.setState({
      currentRecIndex: nextIndex
    });
  }

  bookmarkThisRec(comment) {
    var newBookmark = {
      hotelRecomendationObj: this.props.hotelRecomendations[this.state.currentRecIndex],
      bookmarkComment: comment
    };
    this.setState({bookmarkComment: comment});
    this.props.addBookmark(newBookmark);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <DisplayCurrentRec currentRec={this.props.hotelRecomendations[this.state.currentRecIndex]} />
            <div className="card-action">
              <a onClick={this.advanceToNextRec}>Next</a>
            </div>
          </div>
        </div>
        <Bookmarker bookmarkThisRec={this.bookmarkThisRec}/>
      </div>
    );
  }

}


//////////////////////////////////
// Display Current Recomendations
//////////////////////////////////

var DisplayCurrentRec = ({currentRec}) => (
  <div>
    <div className="card-image">
      <img src={currentRec.Image} alt="picture" />
      <span className="card-title">{currentRec.HotelName}</span>
    </div>
    <div className="card-content">
      <p><i className="material-icons orange-text">star</i>{currentRec.StarRating}</p>
      <p>{currentRec.Description}</p>
      <p>${currentRec.Price} total per person</p>
    </div>
  </div>
);




/////////////////////////
// Add New Bookmark Bar
/////////////////////////

class Bookmarker extends React.Component {
  constructor (props) {
    super(props);
    this.bookmarkThisOne = this.bookmarkThisOne.bind(this);
    this.changeBookmarkComment = this.changeBookmarkComment.bind(this);
    this.state = {
      bookmarkComment: ''
    };
  }

  changeBookmarkComment(e) {
    this.setState({
      bookmarkComment: e.target.value
    });
  }

  bookmarkThisOne(e) {
    e.preventDefault();
    var comment = this.state.bookmarkComment;
    this.props.bookmarkThisRec(comment);
    this.setState({
      bookmarkComment: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.bookmarkThisOne} >
          <textarea className="materialize-textarea" onChange={this.changeBookmarkComment} placeholder="Want to stay here? Write a quick note to your buddies about why you like this one, then bookmark it to highlight this option for your friends to see!" defaultValue={this.state.bookmarkComment} /> <br/>
          <button className="btn-large waves-effect waves-light orange" type="submit">Add Bookmark!</button>
        </form>
      </div>
    );
  }

}






/////////////////////////
// Group Preferences Bar
/////////////////////////

var GroupPreferencesBar = ({priceRange, dateRange, locations, setLocation}) => (
  <div>
    <div className="row">
      <div className="col s3">
        <span><i className="material-icons green-text">credit_card</i>{ priceRange }</span><br />
      </div>
      <div className="col s3">
        <span><i className="material-icons green-text">today</i>{dateRange}</span><br /><br />
      </div>
    </div>
    <span><strong>Locations</strong>
      <DropDownFilter options={locations} setter={setLocation} />
    </span>
  </div>
);

////////////////
// Drop Down
////////////////

class DropDownFilter extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.setter(event.target.value);
  }

  render () {
    var options = this.props.options.map((option, i) => (
        <option value={option} key={i}> {option} </option>
      ));

    return (
      <select value={this.state.value} onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}



































class TripRoom extends React.Component {
  constructor(props) {
    console.log(789);
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