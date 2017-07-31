const PORT = 3001;

var express = require('express');        
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();                 
var router = express.Router();

mongoose.connect('mongodb://eval-app:vJq2Vcav6bfNht1RVRRHfpHKZArSrx2RXX95Ts5tEjVBfWBYruRtKTYBCkHTH8PSyVdyKc2d6MzCSvpjDESH4w==@eval-app.documents.azure.com:10255/?ssl=true&replicaSet=globaldb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var bears = require('./routes/bears');
var sessions = require('./routes/sessions');


app.use('/api', bears);
app.use('/api', sessions);

app.listen(PORT);

console.log('REST API listening on ' + PORT);
