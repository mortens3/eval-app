'use strict';

var express = require('express');
var ejs = require('ejs');
var querystring = require('querystring');
var https = require('https');
var request = require('request');

// Constants
const PORT = 8080;

// App
var app = express();
var dataAccess = require('./data-access/index');

app.set('view engine', 'ejs');

// index page 
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api/bears', function (req, res) {
    dataAccess.getBears(function (error, data, apiInstance) {
        if (error) {
            return res.status(500).send(error);
        }
        else {
            return res.status(200).send(data);
        }
    });
});



app.use(express.static('public'));

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);