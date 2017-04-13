import React from 'react';

class TripRoom extends React.Component {
  constructor(props) {
    console.log(789)
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var obj = {};
    $.ajax({
      type : 'POST',
      url: "/getTotal",
      dataType: 'json',
      data : {'id':1},
      success: function(comments) {
        obj['sum'] = comments.sum;
        console.log(comments, "RESPONSE!");
        this.setState({budgetSum: comments.sum});
      }.bind(this)
    });
  $.ajax({
        type : 'POST',
        url: "/commonTrip",
        dataType: 'json',
        data : {'id':1},
        success: function(comments) {
          obj.location=comments.commonTrips;
          console.log(comments, "COMMON");
          this.setState({commonLocation: comments.commonTrips});
        }.bind(this)
      });
  $.ajax({
        type : 'POST',
        url: "/commonDate",
        dataType: 'json',
        data : {'id':1},
        success: function(comments) {
          obj.dates=[comments.beginning,comments.ending, comments.duration];
          console.log(comments, "COMMON DATES");
          this.setState({commonDateB: comments.beginning, commonDateE:comments.ending});
        }.bind(this)
      });

  setTimeout(function(){
   $.ajax({ 
      type : 'POST',
      url : '/hotwire',
      dataType : "json",
      data : obj,
      success : function(data) {
        console.log(data);
      }.bind(this)
    });
   },1000);
}

  
  render() {
    return (
      <div>
        <h2>Trip Room  *Needs styling</h2>
        <ul> Total Group Budget : {this.state.budgetSum}</ul>
        <ul> Common Location(s) : {this.state.commonLocation}</ul>
        <ul> Common Dates : {this.state.commonDateB} - {this.state.commonDateE}</ul>
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