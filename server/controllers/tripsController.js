var gets = require('../db/db');
var db = gets.db;
var create = gets.tripMaster;
var additionalTrips = gets.moreTrips;

module.exports.createTrip = function(req, res, next) {
  console.log(req.body, "Creating new trip data...");
  var make = req.body;
  make.beginDate = make.beginDate.replace(/[-]/g, '/');
  make.endDate = make.endDate.replace(/[-]/g, '/');
  db.query('SELECT id FROM users WHERE email = ($1)', [make.email], function(err, data) { 
    console.log(data, "data");
    if(data.rows.length === 0) {
      create({ email : make.email,  
        activitiesBudget : parseInt(make.activitiesBudget),
        flightBudget : parseInt(make.flightBudget),
        hotelBudget : parseInt(make.hotelBudget),
        description : make.tripSummary,
        locations : make.locations,
        buddies : make.buddies,
        beginDate : make.beginDate.replace(/[-]/g, '/'),
        duration : make.duration, 
        tripName : make.tripName,
        endDate : make.endDate.replace(/[-]/g, '/'),
        name : make.name
      });
    } else {
      console.log("HERE!!!")
      make.id = data.rows[0].id;
      additionalTrips({ email : make.email, 
        activitiesBudget : parseInt(make.activitiesBudget),
        flightBudget : parseInt(make.flightBudget),
        hotelBudget : parseInt(make.hotelBudget),
        description : make.tripSummary,
        locations : make.locations,
        buddies : make.buddies,
        beginDate : make.beginDate.replace(/[-]/g, '/'),
        duration : make.duration, 
        tripName : make.tripName,
        endDate : make.endDate.replace(/[-]/g, '/'),
        name : make.name,
        id : make.id
      });
    }
    res.send({tripId : make.id});
});
}

module.exports.getTripPreferences = function(req, res, next) {
  var obj = {};
  db.query('select distinct name from locations INNER JOIN userTrips ON(locations.user_trip_id = userTrips.id and userTrips.trip_id = ($1))', [req.body.tripId], function(err, data) {
      obj.tripLocations = data.rows;
  });

  db.query('select namef FROM users INNER JOIN userTrips ON (users.id = userTrips.user_id AND userTrips.trip_id = ($1))', [req.body.tripId], function(err, data) {
    data.rows.forEach(function(item, index, coll) {
      var name = item.namef;
      obj[name] = {};

      db.query('select name from locations where user_trip_id = (select id from userTrips where user_id = (select id from users where namef = ($1)))', [name], function(err, location) {
         obj[name].locations = location.rows;
    
        db.query('select * from dates where trip_id = (select id from userTrips where user_id = (select id from users where namef = ($1)))', [name], function(err, dates) {
           obj[name].beginDate = dates.rows[0].beging;
           obj[name].endDate = dates.rows[0].ending;
           obj[name].duration = parseInt(dates.rows[0].duration);
   
          db.query('select * from budget where trip_id = (select id from userTrips where user_id = (select id from users where namef = ($1)))', [name], function(err, budget) {
            obj[name].hotelBudget = parseInt(budget.rows[0].total);
            obj[name].activitiesBudget = parseInt(budget.rows[0].activitites);
            obj[name].flightBudget = parseInt(budget.rows[0].flight);
            if(index === coll.length-1){
              res.send(obj);
            }
          });
        });
      });
    });
  });
};

module.exports.getTotalBudgetForTrip = function(req, res, next) {
  console.log(req.body, "Getting total trip budget...");
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
          res.send({sum: sum});
        }
      });
    });
  });
};

module.exports.getTripData = function(req, res, next) {
  console.log(req.body, "tripData");
  var dat = {};
  var sum = 0;
  var commonTrips = [];
  var len;

  db.query('SELECT * FROM bookmarks WHERE trip_id = (SELECT id FROM trips WHERE name = ($1))', [req.body.tripId],
    function(err, data) {
      data.bookmarks = data.rows;
      console.log(data.rows, "GETTRIPDATABOOKMARKS!");
  });

  db.query('SELECT total FROM budget INNER JOIN userTrips ON(budget.trip_id = userTrips.user_id and userTrips.trip_id = ($1))', [req.body.tripId], function(err, data) {
    data.rows.forEach(function(item, ind, coll) {
      sum += parseInt(item.total);
      dat.hotelTripSum = sum;
    });
  }); 

  var commonDateObj = {beginning: '', ending: '', duration: ''};

  db.query('SELECT beging FROM dates WHERE trip_number = ($1)', [req.body.tripId], function(err, data) {
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

    db.query('SELECT ending FROM dates WHERE trip_number = ($1)', [req.body.tripId], function(err, data) {
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
      db.query('SELECT duration FROM dates WHERE trip_number = ($1)', [req.body.tripId], function(err, data) {
        commonDateObj.duration = data.rows[0].duration;
        dat.commonDates = commonDateObj;
      });
    });
  });
  
  db.query('SELECT name FROM trips WHERE id = ($1)', [req.body.tripId], function(err, data) {
    dat.tripName = data.rows[0].name;
  });
  db.query('select * from userTrips where trip_id = ($1)',[req.body.tripId], function(err, data) {
    len = data.rows.length;
  });
  db.query('SELECT name FROM locations INNER JOIN userTrips ON(locations.user_trip_id = userTrips.user_id and userTrips.trip_id = ($1))', [req.body.tripId], function(err, data) {
    var counter = {};
    data.rows.forEach(function(item, ind, coll) {
      if(counter[item.name] === undefined) {
        counter[item.name] = 1;
      } else {
        counter[item.name]++;
      }
    });
    for(var key in counter) {
      if(counter[key] > 1) {
        commonTrips.push(key);
      }
    }
    dat.commonTrips = commonTrips;
    setTimeout(function() {
     res.send(dat);
    }, 500);
  });

};

module.exports.commonTripLocations = function(req, res, next) {
  //key represents the trip id
  //gets common trip location(s) out of all user locations associated with a certain trip
  var commonTrips = [];
  var common = {};
  var max;
  var tripName;
  db.query('SELECT name FROM trips WHERE id = ($1)', [req.body.tripId], function(err, data) {
    tripName = data.rows[0].name;
  });
  db.query('SELECT name FROM locations', function(err, data) {
    max = data.rows.length - 1;
  });

  db.query('SELECT * FROM userTrips WHERE trip_id = ($1)', [req.body.tripId], function(err, data) {
    var len = data.rows.length;
    data.rows.forEach(function(item, ind, coll) {
      db.query('SELECT * FROM locations WHERE user_trip_id = ($1)', [item.tripId], function(err, data) {
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
            console.log(commonTrips, "Common trip(s)...");
            res.send({commonTrips: commonTrips, tripName:tripName});
          }
        });
      });
    });
  });
};

module.exports.addTripBookmark = function(req, res, next) {
  //must be sent with tripname, email addres of user making bookmark, and the actual bookmark message 
  //ex. addTripBookmark({email:'lifeisgood@gmail.com', bookmark:'The best trip is now here!', tripname:'abc123'});
  console.log(req.body, "Adding Trip Bookmark");
  db.query('SELECT id FROM trips WHERE name = ($1)', [req.body.tripname], function(err, trip) {
    db.query('SELECT id FROM userTrips WHERE user_id = (SELECT id FROM users WHERE email = ($1)) AND trip_id  = (SELECT id FROM trips WHERE name = ($2))', [req.body.email, req.body.tripname],
      function(err, data) { 
        console.log(data.rows)
        db.query('INSERT INTO \
                      bookmarks(bookmark, user_trip_id, email, trip_id) \
                      VALUES($1, $2, $3, $4) RETURNING bookmark',
                      [req.body.bookmark, data.rows[0].id, req.body.email, trip.rows[0].id], function(err, userResults) {
                        if (err) {
                          res.send(err)
                        }
                        res.send({results:userResults.rows});
                      });
      });
  })
}

module.exports.viewTripBookmark = function(req, res, next) {
  //example // viewTripBookmark({tripname : 'abc123'})
  console.log(req.body, "<--- Trip Bookmarks...");
  db.query('SELECT * FROM bookmarks WHERE trip_id = (SELECT id FROM trips WHERE name = ($1))', [req.body.tripname],
    function(err, data) {
      res.send({data:data.rows});
  });
}


module.exports.commonTripDates = function(req, res, next) {
  console.log(req.body,'Getting common date(s)...');
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
      console.log(commonDateObj, "Common Dates...");
      db.query('SELECT duration FROM dates WHERE trip_number = ($1)', [req.body.id], function(err, data) {
        commonDateObj.duration = data.rows[0].duration;
        res.send(commonDateObj);
      });
    });
  });
};