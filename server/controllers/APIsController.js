
var config = process.env || require('../../env.config');
var hotWireApiKey = config.HOTWIRE_API_KEY;
var md5 = require('md5');
var cid = config.EXPEDIA_CID;
var apiKey = config.EXPEDIA_API_KEY;
var secret = config.EXPEDIA_SECRET;

var options = {
      cid: cid,
      apiKey: apiKey,
      secret: secret,
      sig: md5(apiKey + secret + Math.floor(new Date() / 1000)),
      // sig: "d44f9fb2c7c70f13bd8ea1bc4019a859",
      locale: "en_US",  // optional defaults to en_US
      currencyCode: "USD"  // optional defaults to USD
};


var expedia = require("expedia")(options);

module.exports.expediaAPI = function(req, res, next) {
  console.log("Inside expediaA Api...", req.body)
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelListRequest": {
      "city": req.body.location,
      "countryCode": "US",
      "arrivalDate": "4/23/2017",
      "departureDate": "4/29/2017",
      "RoomGroup": {
        "Room": { "numberOfAdults": "2" }
      },
      "numberOfResults": "12"
    }
  }

  expedia.hotels.list(options, function(err, data){
      if(err){console.log("ERROR",err) };
      console.log("Getting Expedia Hotel Data...", data);
      res.send(data.HotelListResponse.HotelList);
  });
};


var Hotwire = require('hotwire');
var hotwire = new Hotwire(process.env.HOTWIRE_API_KEY || hotWireApiKey);
 var options = {
        cid     : "379639",
        apiKey  : "65cc419lbqf590p1njeuv4p0q0"
        // secret : "bvp038hq772sm"
    };


var Hotwire = require('hotwire');
var hotwire = new Hotwire(process.env.HOTWIRE_API_KEY || hotWireApiKey);

module.exports.hotwirePostRequest = function(req, res, next) {
  console.log("Inside Hotwire Api...");
  hotwire.hotelDeals({format: 'json',
    price: '*~' + req.body.sum,
    limit: 10,
    startdate: req.body.dates[0] + '~' + req.body.dates[1],
    duration: parseInt(req.body.dates[2])
  }, function (err, response, body) {
    if (err) {
      console.log(err, 'ERR');
    }
    res.send(JSON.parse(body));
  });
};
