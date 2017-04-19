// Used for testing
import $ from 'jquery';

var obj = {};

var getTotal = function() {
  $.ajax({
    type: 'POST',
    url: '/getTotal',
    dataType: 'json',
    data: {'id': 1},
    success: function(comments) {
      obj['sum'] = comments.sum;
      console.log(comments, 'RESPONSE!');
    }.bind(this)
  });
};

var postCommonTrip = function() {
  $.ajax({
    type: 'POST',
    url: '/commonTrip',
    dataType: 'json',
    data: {'id': 1},
    success: function(comments) {
      obj.location = comments.commonTrips;
      console.log(comments, 'COMMON');
    }.bind(this)
  });
};

var postCommonDate = function() {
  $.ajax({
    type: 'POST',
    url: '/commonDate',
    dataType: 'json',
    data: {'id': 1},
    success: function(comments) {
      obj.dates = [comments.beginning, comments.ending, comments.duration];
      console.log(comments, 'COMMON DATES');
    }.bind(this)
  });
};

var postToHotWire = function() {
  $.ajax({
    type: 'POST',
    url: '/hotwire',
    dataType: 'json',
    data: obj,
    success: function(data) {
      console.log(data);
      return data;
    }
  });
};

module.exports = {
  getTotal: getTotal,
  postCommonTrip: postCommonTrip,
  postCommonDate: postCommonDate,
  postToHotWire: postToHotWire
};
