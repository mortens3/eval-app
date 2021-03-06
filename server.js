'use strict';



var express = require('express');
var ejs = require('ejs');
var querystring = require('querystring');
var https = require('https');
var request = require('request');
const appInsights = require("applicationinsights");
appInsights.setup("6f6fde25-c558-4045-8728-4c46422381c7");
appInsights.start();

// Constants
const PORT = 3000;

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
            appInsights.defaultClient.trackException({exception: error});
        }
        else {
            return res.status(200).send(data);
            appInsights.defaultClient.trackTrace({message:'/api/bears res=' + data});
        }
    });
});

app.get('/api/sessions', function (req, res) {
    dataAccess.getSessions(function (error, data, apiInstance) {
        if (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        else {
            console.log(data);
            return res.status(200).send(data);
        }
    });
});

app.use(express.static('public'));


app.listen(PORT);

console.log('Running on http://localhost:' + PORT);