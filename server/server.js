var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var nodemailer = require('nodemailer');
var validator = require('validator');
var port = process.env.PORT || 3000;


var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test1';
// var client = new pg.Client(connectionString);

// client.connect(function (err) {
//   if (err) throw err;
// });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
  
app.listen(port, function() {
  console.log('listening on', port);
});

var tripCreatorTest = {
  //Once "create trip" button is hit, api call should be made...
  email : "johndoe@gmail.com",
  //backend will create random and unique trip id ex "abc123"
    //Send that trip id back to client side as reference to that specific trip for all users
};

//3 IDEAL FRONTEND SUMBISSION FORMS BELOW!!!
var tripMaster1 = {
  //tripMaster === Originator of trip
    //John Doe creates trip
  email : 'johndoe@gmail.com',
  nameF : 'John',
  nameL : 'Doe',
  locations : ['New York', 'Atlanta', 'Pheonix'],
  invites : ['f1','f2','f2'],
  startDate : '01/26/18',
  endDate : '03/16/2016',
  duration : '7',
  budget : 1100,
  tripname : "abc123"
};

var tripUser1 = {
  //tripUser === invitee
  email : 'johhnyjoe@gmail.com',
  nameF : 'Johnny',
  nameL : 'Joe',
  locations : ['Reeding', 'Atlanta', 'Fresno'],
  startDate : '01/06/18',
  endDate : '03/26/2018',
  duration : '7',
  budget : 300,
  tripId : 11
};

var tripUser2 = {
  //tripUser === invitee
  email : 'lifeisgood@gmail.com',
  nameF : 'Lyfe',
  nameL : 'Jennings',
  locations : ['Merced', 'Atlanta', 'Queens'],
  startDate : '02/26/18',
  endDate : '03/22/2018',
  duration : '7',
  budget : 1300,
  tripId : 11
};

var tripMaster = function(obj) {
  console.log("Creating Trip Master!");
  client.query("INSERT INTO \
                  trips(name) \
                  VALUES($1) RETURNING id",
                  [obj.tripname], function(err, t_results) {
                    if(err){
                      console.log(t_results)
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  users(namef, namel, email) \
                  VALUES($1, $2, $3) RETURNING id",
                  [obj.nameF, obj.nameL, obj.email], function(err, u_results) {
                    if(err){
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  userTrips(user_id, trip_id) \
                  VALUES($1, $2) RETURNING id",
                  [u_results.rows[0].id, t_results.rows[0].id], function(err, ut_results) {
                    if(err){
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  dates(beging, ending, duration, trip_id) \
                  VALUES($1, $2, $3, $4) RETURNING id",
                  [obj.startDate, obj.endDate, obj.duration, ut_results.rows[0].id], function(err, d_results) {
                    if(err){
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  budget(total, trip_id) \
                  VALUES($1, $2) RETURNING id",
                  [obj.budget, ut_results.rows[0].id], function(err, b_results) {
                    if(err){
                      // res.send(err)
                    }

  obj.locations.forEach(function(location, ind, coll) {
  client.query("INSERT INTO \
                  locations(name, trip_id) \
                  VALUES($1, $2) RETURNING id",
                  [location, ut_results.rows[0].id], function(err, u_results) {
                    if(err){
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
  console.log("Creating Trip User!");

  client.query("INSERT INTO \
                  users(namef, namel, email) \
                  VALUES($1, $2, $3) RETURNING id",
                  [obj.nameF, obj.nameL, obj.email], function(err, u_results) {
                    if(err){
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  userTrips(user_id, trip_id) \
                  VALUES($1, $2) RETURNING id",
                  [u_results.rows[0].id, obj.tripId], function(err, ut_results) {
                    if(err){
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  dates(beging, ending, duration, trip_id) \
                  VALUES($1, $2, $3, $4) RETURNING id",
                  [obj.startDate, obj.endDate, obj.duration, ut_results.rows[0].id], function(err, d_results) {
                    if(err){
                      // res.send(err)
                    }

  client.query("INSERT INTO \
                  budget(total, trip_id) \
                  VALUES($1, $2) RETURNING id",
                  [obj.budget, ut_results.rows[0].id], function(err, b_results) {
                    if(err){
                      // res.send(err)
                    }

  obj.locations.forEach(function(location, ind, coll) {
  client.query("INSERT INTO \
                  locations(name, trip_id) \
                  VALUES($1, $2) RETURNING id",
                  [location, ut_results.rows[0].id], function(err, u_results) {
                    if(err){
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
// tripUser(tripUser2);

var getTotal = function(key) {
  //key represents the trip id
    //gets total contribution (sum) associated with a single trip
  var sum = 0;
  client.query("SELECT * FROM userTrips WHERE trip_id = ($1)", [key], function(err, data) {
    data.rows.forEach(function(item, ind, coll) {
      client.query("SELECT total FROM budget WHERE trip_id = ($1)", [item.id] , function(err, data) {
        if(err) {
          console.log(err, "err");
        }
        sum+=parseInt(data.rows[0].total);
        if(ind === coll.length-1) {
          console.log(sum, "sum")
          return sum;
        }
      });
    });
  });
}
// getTotal(11)

var commonTrip = function(key) {
//key represents the trip id
//gets common trip location(s) out of all user locations associated with a certain trip
  var commonTrips = [];
  var common = {};
  var max;
  client.query("SELECT name FROM locations", function(err, data) {
    max = data.rows.length-1;
  });

  client.query("SELECT * FROM userTrips WHERE trip_id = ($1)", [key], function(err, data) {
    var len = data.rows.length;
    data.rows.forEach(function(item, ind, coll) {
      client.query("SELECT * FROM locations WHERE trip_id = ($1)", [item.id] , function(err, data) {
        if(err) {
            console.log(err, "err");
          }
          data.rows.forEach(function(item, index, collection) {
            max--;
            if(common[item.name] === undefined) {
              common[item.name] = 1;
            } else {
              common[item.name]++;
            }
            if(max === 0) {
              for(var key in common) {
                if(common[key]===len) {
                  commonTrips.push(key);
                }
              }
              console.log(commonTrips)
              //return commonTrips;
            }
          });
        });
      });
    });
  }
// commonTrip(11);

var getUserLocations = function(key) {
  //gets a single users location preferences based on trip id
    //key references some data specific to user, can be an object
  client.query("SELECT * FROM locations WHERE trip_id = (SELECT id FROM userTrips WHERE user_id = ($1))", [key], function(err, data) {
    if(err) {
      res.send(404);
      console.log(err, "ERR");
    }
    console.log(data.rows);
  });
};
// getUserLocations(14);

var getUserDates = function(key) {
    //gets a single users date preferences based on trip id
      //key references some data specific to user, can be an object
  client.query("SELECT * FROM dates WHERE trip_id = (SELECT id FROM userTrips WHERE user_id = ($1))", [key], function(err, data) {
    if(err) {
      res.send(404);
      console.log(err, "ERR");
    }
    console.log(data.rows);
  });
};
// getUserDates(14);

var getUserBudget = function(key) {
  //gets a single users budget based on trip id
    //key references some data specific to user, can be an object
  client.query("SELECT * FROM budget WHERE trip_id = (SELECT id FROM userTrips WHERE user_id = ($1))", [key], function(err, data) {
    if(err) {
      res.send(404);
      console.log(err, "ERR");
    }
    console.log(data.rows);
  });
};
// getUserBudget(14);

var sendEmail = function(obj) {
  //obj will contain email recipients name and email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bookingbuddy17@gmail.com',
      pass: 'Verizon7'
    }
  });

  let mailOptions = {
    from: '"Booking Buddy" <foo@blurdybloop.com>', // sender address
    to: obj.email, // list of receivers
    subject: "Hey " + obj.name + "! You've been invited to go on vation!", // Subject line
    text: 'Whatever we want to tell the client', // plain text body
    html: '<b>Enjoy your savings!</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
};