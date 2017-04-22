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
        // this.setState({tripDate: data});
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
          hotelRecomendations={hotelRecomendations}
        />
      </div>
    );
  }
}

export default TripRoom;

