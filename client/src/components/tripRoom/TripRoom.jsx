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
    this.state = {};
  }

  componentDidMount() {
    // fetchInformation()
    //   .then((data) => {
    //     this.setState({
    //       budgetSum: data.sum,
    //       commonLocation: data.commonTrips,
    //       commonDateB: data.beginning,
    //       commonDateE: data.ending
    //     });
    //   });
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

