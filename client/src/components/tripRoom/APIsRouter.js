import axios from 'axios';
// Used for testing
import $ from 'jquery';

var data = {};

var getTotal = function() {
  // return $.ajax({
  //   type: 'POST',
  //   url: '/getTotal',
  //   dataType: 'json',
  //   data: {'id': 1},
  //   success: function(comments) {
  //     obj['sum'] = comments.sum;
  //     console.log(comments, 'RESPONSE!');
  //   }.bind(this)
  // });
  return axios.get('/getTotal', {
      params: {
        id: 1
      }
    });
};



var postCommonTrip = function() {
  // return $.ajax({
  //   type: 'POST',
  //   url: '/commonTrip',
  //   dataType: 'json',
  //   data: {'id': 1},
  //   success: function(comments) {
  //     obj.location = comments.commonTrips;
  //     console.log(comments, 'COMMON');
  //   }.bind(this)
  // });
  return axios.post('/commonTrip', {
      id: 1
    });
};

var postCommonDate = function() {
  // return $.ajax({
  //   type: 'POST',
  //   url: '/commonDate',
  //   dataType: 'json',
  //   data: {'id': 1},
  //   success: function(comments) {
  //     obj.dates = [comments.beginning, comments.ending, comments.duration];
  //     console.log(comments, 'COMMON DATES');
  //   }.bind(this)
  // });
  return axios.post('/commonDate', {
      id: 1
    });
};

var postToHotWire = function() {
  // return $.ajax({
  //   type: 'POST',
  //   url: '/hotwire',
  //   dataType: 'json',
  //   data: obj,
  //   success: function(data) {
  //     console.log(data);
  //     return data;
  //   }
  // });
  return axios.post('/hotwire', {
      data: data
    });
};

var fetchInformation = function() {
  // Promise.all(getTotal(), postCommonTrip(), postCommonDate())
  //   .then(postToHotWire)
  //   .catch(function(error) {
  //     console.error('Error posting to Hotwire:', error);
  //   });

  axios.all([getTotal(), postCommonTrip(), postCommonDate()])
    .then(axios.spread(function(acct, perms) {
      console.log(acct);
    }))
    .catch(error => {
      console.error('Error posting to Hotwire:', error);
    });
};

export default fetchInformation;
