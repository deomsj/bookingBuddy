// Used for testing
import $ from 'jquery';

var getTotal = function(obj) {
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
}.bind(this);

var postCommonTrip = function(obj) {
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
}.bind(this);

var postCommonDate = function(obj) {
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
}.bind(this);

var postToHotWire = function(obj) {
  $.ajax({
    type: 'POST',
    url: '/hotwire',
    dataType: 'json',
    data: obj,
    success: function(data) {
      console.log(data);
    }.bind(this)
  });
}.bind(this);

module.exports = {
  getTotal: getTotal,
  postCommonTrip: postCommonTrip,
  postCommonDate: postCommonDate,
  postToHotWire: postToHotWire
};
