'use strict'

const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');

router.get('/', function(req, res) {

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(config.spotify.client_id + ':' + config.spotify.client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      var token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/search?q=Star Wars&type=album',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };

      request.get(options, function(error, response, body) {
        res.json(body);
      });

    } else {
      res.json([]);
    }
  });
});

router.get('/search', function(req, res) {

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(config.spotify.client_id + ':' + config.spotify.client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/search?q=${encodeURI(req.query.q)}&type=album`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };

      request.get(options, function(error, response, body) {
        res.json(body);
      });

    } else {
      res.json([]);
    }
  });
});

module.exports = router;
