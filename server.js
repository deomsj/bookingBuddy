var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var port = process.env.PORT || 3000;


var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test1';
var client = new pg.Client(connectionString);


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
var submitUser1 = {
  //signup example data
    //John Doe creates trip
  email : 'johndoe@gmail.com',
  nameF : 'John',
  nameL : 'Doe',
  locations : ['New York', 'Atlanta', 'Pheonix'],
  startDate : '01/26/18',
  endDate : '03/16/2016',
  duration : 7,
  budget : 1000,
  tripId : "abc123"
};

var submitUser2 = {
  email : 'johhnyjoe@gmail.com',
  nameF : 'Johnny',
  nameL : 'Joe',
  locations : ['Reeding', 'Atlanta', 'Fresno'],
  startDate : '01/06/18',
  endDate : '03/26/2018',
  duration : 7,
  budget : 300,
  tripId : "abc123"
};

var submitUser3 = {
  email : 'lifeisgood@gmail.com',
  nameF : 'Lyfe',
  nameL : 'Jennings',
  locations : ['Merced', 'Atlanta', 'Queens'],
  startDate : '02/26/18',
  endDate : '03/22/2018',
  duration : 7,
  budget : 1300,
  tripId : "abc123"
};

