'use strict';

const express = require('express');
const routes = require('./routes');

const app = express(),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.listen(port);
console.log('API Server listining on port: ' + port);
