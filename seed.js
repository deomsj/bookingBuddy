var express = require('express');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test1';
var client = new pg.Client(connectionString);

client.connect(function (err) {

  if (err) throw err;

  client.query("CREATE TABLE \
                  users( \
                  id SERIAL PRIMARY KEY, \
                  nameF VARCHAR(15) not null, \
                  nameL VARCHAR(15) not null, \
                  email VARCHAR(25) not null)");

  client.query("CREATE TABLE \
                  trips( \
                  id SERIAL PRIMARY KEY)");

  client.query("CREATE TABLE \
                  subTrips( \
                  id SERIAL PRIMARY KEY, \
                  user_id INTEGER REFERENCES users(id), \
                  trip_id INTEGER REFERENCES trips(id))");

client.query("CREATE TABLE \
                  budget( \
                  id SERIAL PRIMARY KEY, \
                  total NUMERIC(6,2) not null, \
                  trip_id INTEGER REFERENCES trips(id))");

client.query("CREATE TABLE \
                  dates( \
                  id SERIAL PRIMARY KEY, \
                  beging VARCHAR(15) not null, \
                  ending VARCHAR(15) not null, \
                  user_id INTEGER REFERENCES users(id), \
                  trip_id INTEGER REFERENCES trips(id))");

client.query("CREATE TABLE \
                  locations( \
                  id SERIAL PRIMARY KEY, \
                  name VARCHAR(25) not null, \
                  user_id INTEGER REFERENCES users(id), \
                  trip_id INTEGER REFERENCES trips(id))");

});