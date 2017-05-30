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

app.set('view engine', 'ejs');



// index page 
app.get('/', function (req, res) {
    res.render('index');
});


app.use(express.static('public'));

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);