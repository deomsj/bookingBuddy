var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test7';
var db = new pg.Client(connectionString);

db.connect(function (err) {
  if (err) { throw err; }
});

var tripCreatorTest = {
  //Once "create trip" button is hit, api call should be made...
  email: 'johndoe@gmail.com',
  //backend will create random and unique trip id ex "abc123"
    //Send that trip id back to db side as reference to that specific trip for all users
};

//3 IDEAL FRONTEND SUMBISSION FORMS BELOW!!!
var tripMaster1 = {
  //tripMaster === Originator of trip
    //John Doe creates trip
  email: 'johndoe@gmail.com',
  nameF: 'John',
  nameL: 'Doe',
  locations: ['New York', 'Atlanta', 'Pheonix'],
  invites: ['f1', 'f2', 'f2'],
  startDate: '01/26/2017',
  endDate: '10/16/2017',
  duration: '7',
  budget: 1100,
  tripname: 'abc123'
};

var tripUser1 = {
  //tripUser === invitee
  email: 'johhnyjoe@gmail.com',
  nameF: 'Johnny',
  nameL: 'Joe',
  locations: ['Reeding', 'Atlanta', 'Fresno'],
  startDate: '01/06/2017',
  endDate: '10/26/2017',
  duration: '7',
  budget: 300,
  tripId: 1
  //CHANGE "tripId" TO WHATEVER TRIP ID IS CREATED FROM TRIP MASTER
    //SELECT * FROM trips; <--- in postgres this will show your trip id
};

var tripUser3 = {
  //tripUser === invitee
  email: 'lifetoogood@gmail.com',
  nameF: 'Ion',
  nameL: 'Sphere',
  locations: ['Oakland', 'Atlanta', 'New York'],
  startDate: '02/02/2017',
  endDate: '12/22/2017',
  duration: '7',
  budget: 1200,
  tripId: 1
  //CHANGE "tripId" TO WHATEVER TRIP ID IS CREATED FROM TRIP MASTER
    //SELECT * FROM trips; <--- in postgres this will show your trip id
};

// var apiCall = function() {

// }

var tripMaster = function(obj) {
  console.log('Creating Trip Master!');
  db.query('INSERT INTO \
                  trips(name) \
                  VALUES($1) RETURNING id',
                  [obj.tripname], function(err, tripResults) {
                    if (err) {
                      console.log(tripResults);
                      // res.send(err)
                    }

  db.query('INSERT INTO \
                  users(namef, namel, email) \
                  VALUES($1, $2, $3) RETURNING id',
                  [obj.nameF, obj.nameL, obj.email], function(err, userResults) {
                    if (err) {
                      // res.send(err)
                    }

  db.query('INSERT INTO \
                  userTrips(user_id, trip_id) \
                  VALUES($1, $2) RETURNING id',
                  [userResults.rows[0].id, tripResults.rows[0].id], function(err, userTripsResults) {
                    if (err) {
                      // res.send(err)
                    }
                    console.log(userTripsResults.rows[0]);
  db.query('INSERT INTO \
                  dates(beging, ending, duration, trip_id, trip_number) \
                  VALUES($1, $2, $3, $4, $5) RETURNING id',
                  [obj.startDate, obj.endDate, obj.duration, userTripsResults.rows[0].id, tripResults.rows[0].id], function(err, dateResults) {
                    if (err) {
                      // res.send(err)
                    }

  db.query('INSERT INTO \
                  budget(total, trip_id) \
                  VALUES($1, $2) RETURNING id',
                  [obj.budget, userTripsResults.rows[0].id], function(err, budgetResults) {
                    if (err) {
                      // res.send(err)
                    }

  obj.locations.forEach(function(location, ind, coll) {
  db.query('INSERT INTO \
                  locations(name, user_trip_id) \
                  VALUES($1, $2) RETURNING id',
                  [location, userTripsResults.rows[0].id], function(err, userResults) {
                    if (err) {
                      // res.send(err)
                    }
                  });
                });
              });
            });
          });
        });
      });
};

var tripUser = function(obj) {
  console.log('Creating Trip User!');

  db.query('INSERT INTO \
                  users(namef, namel, email) \
                  VALUES($1, $2, $3) RETURNING id',
                  [obj.nameF, obj.nameL, obj.email], function(err, userResults) {
                    if (err) {
                      // res.send(err)
                    }

  db.query('INSERT INTO \
                  userTrips(user_id, trip_id) \
                  VALUES($1, $2) RETURNING id',
                  [userResults.rows[0].id, obj.tripId], function(err, userTripsResults) {
                    if (err) {
// IF YOU EXPERIENCE ERROR HERE CHANGE "tripId" in tripUser object TO WHATEVER TRIP ID IS CREATED FROM TRIP MASTER
  //SELECT * FROM trips; <--- in postgres, this will show your trip id
                      // res.send(err)
                    }

  db.query('INSERT INTO \
                  dates(beging, ending, duration, trip_id, trip_number) \
                  VALUES($1, $2, $3, $4, $5) RETURNING id',
                  [obj.startDate, obj.endDate, obj.duration, userTripsResults.rows[0].id, obj.tripId ], function(err, dateResults) {
                    if (err) {
                      // res.send(err)
                    }

  db.query('INSERT INTO \
                  budget(total, trip_id) \
                  VALUES($1, $2) RETURNING id',
                  [obj.budget, userTripsResults.rows[0].id], function(err, budgetResults) {
                    if (err) {
                      // res.send(err)
                    }

  obj.locations.forEach(function(location, ind, coll) {
  db.query('INSERT INTO \
                  locations(name, user_trip_id) \
                  VALUES($1, $2) RETURNING id',
                  [location, userTripsResults.rows[0].id],
                  function(err, userResults) {
                    if (err) {
                      // res.send(err)
                    }
                  });
          });
        });
      });
    });
  });
};
// tripMaster(tripMaster1);
// tripUser(tripUser3);





module.exports = db;