//Start Mongo and fire up Express
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

function startExpress(callback) {
  var app = express();
  app.use(bodyParser());
  require('./routing')(app);
  callback(app);
}

function startMongo(callback) {
  var DEFAULT_DB = 'mongodb://localhost/cat-registration';
  var db = process.env.MONGOHQ_URL || DEFAULT_DB;
  mongoose.connect(db, function(err) {     
    require('./Registration');
    callback();
  });
}

module.exports = function(fn) {
  startMongo(function() {
    startExpress(fn);
  });
}
