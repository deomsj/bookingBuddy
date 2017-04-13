import React from 'react';

class TripRoom extends React.Component {
  constructor(props) {
    console.log(789)
    super(props);
    this.state = {};
  }
  componentDidMount() {
    $.ajax({
      type : 'POST',
      url: "/getTotal",
      dataType: 'json',
      data : {'id':11},
      success: function(comments) {
        console.log(comments, "RESPONSE!");
        this.setState({comments: comments.sum});
      }.bind(this)
    });
$.ajax({
      type : 'POST',
      url: "/commonTrip",
      dataType: 'json',
      data : {'id':11},
      success: function(comments) {
        console.log(comments, "COMMON");
        this.setState({commonTrip: comments.commonTrips});
      }.bind(this)
    });
  }

  
  render() {
    return (
      <div>
        <h2>Trip Room  *Needs styling</h2>
        <ul> Total Group Budget : {this.state.comments} Common Trip : {this.state.commonTrip} </ul>
      </div>
      )
  }
  
  renderComment({body, author}) {
    return (
    <div>
      <li></li>; 
    </div>
    )
  }
}


export default TripRoom;