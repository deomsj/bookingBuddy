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

    this.fetchInformation(this.props.tripId);
  }

  fetchTripInformation(tripId){
    //get all trip data
    console.log("GETTING TRIP DATA!")
    $.ajax({
      type: 'POST',
      url: '/geTripData',
      dataType: 'json',
      data: { tripId : tripId },
      success: function(data) {
        // this.setState({tripDate: data});
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

