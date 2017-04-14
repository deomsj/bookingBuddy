var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../client')));
app.use(routes);

app.listen(port, function() {
  console.log('listening on', port);
});


module.exports = app;
