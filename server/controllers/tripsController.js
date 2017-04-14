var db = require('../db/db');

module.exports.getTotalBudgetForTrip = function(req, res, next) {
  console.log('getTotal');
  console.log(req.body);
  //key represents the trip id
    //SELECT * FROM trips <------ to see your current trip id(s)!
    //gets total contribution (sum) associated with a single trip
  var sum = 0;
  db.query('SELECT * FROM userTrips WHERE trip_id = ($1)', [req.body.id], function(err, data) {
    data.rows.forEach(function(item, ind, coll) {
      db.query('SELECT total FROM budget WHERE trip_id = ($1)', [item.id], function(err, data) {
        if (err) {
          console.log(err, 'err');
        }
        sum += parseInt(data.rows[0].total);
        if (ind === coll.length - 1) {
          //console.log(sum, "sum")
          res.send({sum: sum});
        }
      });
    });
  });
};


module.exports.commonTripLocations = function(req, res, next) {
  console.log('COMMON TRIP', req.body);
  //key represents the trip id
  //gets common trip location(s) out of all user locations associated with a certain trip
  var commonTrips = [];
  var common = {};
  var max;
  var tripName;
  db.query('SELECT name FROM trips WHERE id = ($1)', [req.body.id], function(err, data) {
    tripName = data.rows[0].name;
  });
  db.query('SELECT name FROM locations', function(err, data) {
    max = data.rows.length - 1;
  });

  db.query('SELECT * FROM userTrips WHERE trip_id = ($1)', [req.body.id], function(err, data) {
    var len = data.rows.length;
    data.rows.forEach(function(item, ind, coll) {
      db.query('SELECT * FROM locations WHERE user_trip_id = ($1)', [item.id], function(err, data) {
        if (err) {
          console.log(err, 'err');
        }
        data.rows.forEach(function(item, index, collection) {
          max--;
          if (common[item.name] === undefined) {
            common[item.name] = 1;
          } else {
            common[item.name]++;
          }
          if (max === 0) {
            for (var key in common) {
              if (common[key] === len) {
                commonTrips.push(key);
              }
            }
            console.log('CT', commonTrips);
            res.send({commonTrips: commonTrips, tripName:tripName});
          }
        });
      });
    });
  });
};


module.exports.commonTripDates = function(req, res, next) {
  console.log('COMMON DATE');
  //key represents the trip id
  //gets common trip location(s) out of all user locations associated with a certain trip
  var commonDateObj = {beginning: '', ending: '', duration: ''};
  db.query('SELECT beging FROM dates WHERE trip_number = ($1)', [req.body.id], function(err, data) {
    var begHighMon = [];
    var begHighDay = [];
    var begHighYear = [];
    for (var i = 0; i < data.rows.length; i++) {
      begHighMon.push(parseInt(data.rows[i].beging.slice(0, 2)));
      begHighDay.push(parseInt(data.rows[i].beging.slice(3, 5)));
      begHighYear.push(parseInt(data.rows[i].beging.slice(6, 10)));
    }
    commonDateObj.beginning += Math.max(...begHighMon) + '/';
    commonDateObj.beginning += Math.max(...begHighDay) + '/';
    commonDateObj.beginning += Math.max(...begHighYear);

    db.query('SELECT ending FROM dates WHERE trip_number = ($1)', [req.body.id], function(err, data) {
      var endHighMon = [];
      var endHighDay = [];
      var endHighYear = [];
      for (var i = 0; i < data.rows.length; i++) {
        endHighMon.push(parseInt(data.rows[i].ending.slice(0, 2)));
        endHighDay.push(parseInt(data.rows[i].ending.slice(3, 5)));
        endHighYear.push(parseInt(data.rows[i].ending.slice(6, 10)));
      }
      commonDateObj.ending += Math.min(...endHighMon) + '/';
      commonDateObj.ending += Math.min(...endHighDay) + '/';
      commonDateObj.ending += Math.min(...endHighYear);
      console.log(777, commonDateObj);
      db.query('SELECT duration FROM dates WHERE trip_number = ($1)', [req.body.id], function(err, data) {
        commonDateObj.duration = data.rows[0].duration;
        res.send(commonDateObj);
      });
    });
  });
};