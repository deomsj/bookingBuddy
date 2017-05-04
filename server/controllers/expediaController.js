var expedia = require('expedia');
var config = process.env || require('../../env.config');
var md5 = require('md5');
var cid = config.EXPEDIA_CID;
var apiKey = config.EXPEDIA_API_KEY;
var secret = config.EXPEDIA_SECRET;

module.exports.expediaAPI = function(req, res, next) {
  console.log('Inside expediaA Api...', req.body);

  var expediaQueryDate = Math.floor(new Date() / 1000);

  var expediaQueryOptions = {
    customerSessionId: 'thisisauniqueID',
    customerIpAddress: '127.0.0.1',
    customerUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)',
    HotelListRequest: {
      city: req.body.location,
      countryCode: 'US',
      arrivalDate: req.body.beginningDate,
      departureDate: req.body.endingDate,
      RoomGroup: {
        Room: { numberOfAdults: '2' }
      },
      numberOfResults: '12'
    }
  };

  var newExpediaQuery = expedia({
    cid: '379639',
    apiKey: '65cc419lbqf590p1njeuv4p0q0',
    secret: 'bvp038hq772sm',
    sig: md5('65cc419lbqf590p1njeuv4p0q0' + 'bvp038hq772sm' + expediaQueryDate),
    locale: 'en_US', // optional defaults to en_US
    currencyCode: 'USD' // optional defaults to USD
  });

  var returned = false;
  newExpediaQuery.hotels.list(expediaQueryOptions, function(err, data) {
    if (err) {
      console.log('ERROR', err);
    }
    console.log('Getting Expedia Hotel Data...');
    res.send(data.HotelListResponse.HotelList);
    returned = true;
  });
};

// Bookmarks
module.exports.expediaBookmarksAPI = function(req, res, next) {
  console.log('Inside expedia Bookmarks Api...', req.body);

  var expediaBookmarksQueryDate = Math.floor(new Date() / 1000);

  var expediaBookmarksQueryOptions = {
    customerSessionId: 'thisisauniqueID',
    customerIpAddress: '127.0.0.1',
    customerUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)',
    HotelListRequest: {
      hotelIdList: req.body.hotelIdList,
      arrivalDate: req.body.beginningDate,
      departureDate: req.body.endingDate,
      RoomGroup: {
        Room: { numberOfAdults: '2' }
      },
      numberOfResults: '1'
    }
  };

  var newExpediaBookmarksQuery = expedia({
    cid: '379639',
    apiKey: '65cc419lbqf590p1njeuv4p0q0',
    secret: 'bvp038hq772sm',
    sig: md5('65cc419lbqf590p1njeuv4p0q0' + 'bvp038hq772sm' + expediaBookmarksQueryDate),
    locale: 'en_US', // optional defaults to en_US
    currencyCode: 'USD' // optional defaults to USD
  });

  newExpediaBookmarksQuery.hotels.list(expediaBookmarksQueryOptions, function(err, data) {
    if (err) {
      console.log('ERROR', err);
    }
    console.log('Getting Expedia Hotel BOOKMARK Data...');
    console.log('BOOKMARK data returned from expedia: ', data);
    res.send(data.HotelListResponse.HotelList);
  });
};
