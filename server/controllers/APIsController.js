var hotWireApiKey = require('../config').hotWireApiKey;


var Hotwire = require('hotwire');
var hotwire = new Hotwire(process.env.HOTWIRE_API_KEY || hotWireApiKey);

module.exports.hotwirePostRequest = function(req, res, next) {
  console.log("Inside Hotwire Api...");
  hotwire.hotelDeals({format: 'json',
    price: '*~' + req.body.sum,
    limit: 10,
    dest: req.body.location,
    rooms: 1,
    adults: 2,
    children: 0,
    startdate: req.body.dates[0],
    enddate: req.body.dates[1],
    duration: parseInt(req.body.dates[2])
  }, function (err, response, body) {
    if (err) {
      console.log(err, 'ERR');
    }
    res.send(JSON.parse(body));
  });
};



