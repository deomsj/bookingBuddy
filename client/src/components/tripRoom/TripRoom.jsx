import React from 'react';
import {tripData, hotelRecomendations} from './data/tripRoomDummyData';
import {expediaData, hotwireData} from './data/tripRoomDynamicData';
import fetchInformation from './APIsRouter';
import axios from 'axios';

import TripRoomComponents from './tripRoomComponents/TripRoomComponents.jsx';

// Used for testing
import $ from 'jquery';

/////////////////////////
// Trip Room Components
/////////////////////////


class TripRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripData: {}
    };
  }

  componentDidMount() {
    console.log('getting current trip data for trip # ' + this.props.tripId);

    this.fetchTripInformation(this.props.tripId);
  }

  fetchTripInformation(Id){
    console.log("GETTING TRIP DATA!")
    $.ajax({
      type: 'POST',
      url: '/getTripData',
      dataType: 'json',
      data: { tripId : Id },
      success: function(data) {
        console.log(data, "Data");
        this.setState({tripDate: data});
        $.ajax({
          type: 'POST',
          url: '/expedia',
          dataType: 'json',
          data: { beginningDate : data.commonDates.beginning,
            endingDate : data.commonDates.ending,
            location : data.commonTrips[0]
          },
          success: function(expediaResults) {
            console.log(expediaResults, "expediaResults");
            // this.setState({expediaResults: expediaResults});
          }.bind(this)
        });
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <TripRoomComponents
          tripData={tripData}
          tripId={this.props.tripId}
          profile={this.props.profile}
          hotelRecomendations={hotelRecomendations}
        />
      </div>
    );
  }
}

export default TripRoom;



// var tripData  = {
//   tripId: 12345,
//   tripName: 'Hiking Trip',
//   commonDates:  {
//     beginning: '4/29/2017',
//     duration: 4,
//     ending: '5/12/2017'
//   },
//   commonLocations: [
//     'cityName1',
//     'cityName2'
//   ],
//   averageNightlyHotelBudget: 127.00,
//   buddyList: [{
//       name: 'Lou',
//       email: 'formMasterLou@gmail.com',
//     }],
//   bookmarks: [{
//     bookmarkID: Date.now(),
//     tripId: 23,
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
