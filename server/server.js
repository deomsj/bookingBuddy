var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var Hotwire = require('hotwire');

var hotwire = new Hotwire('93w4ahrxdpy96pj6mxnaxn2t');

// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test6';
// var client = new pg.Client(connectionString);

// client.connect(function (err) {
//   if (err) throw err;
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../client')));
app.use(routes);

app.listen(port, function() {
  console.log('listening on', port);
});


module.exports = app;
