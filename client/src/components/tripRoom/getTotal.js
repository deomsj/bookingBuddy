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

module.exports = getTotal;