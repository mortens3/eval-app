'use strict';

var request = require('request');

var contentApiUrl = 'http://localhost:8081/api';

function getSessions(cb) {
    request(contentApiUrl + '/sessions', function (err, response, body) {
        if (err) {
            return cb(err);
        }
        var data = JSON.parse(body);
        var apiInstance = response.headers["x-mesos-taskid"];
        cb(null, data, apiInstance);
    });
}

function getBears(cb) {
    request(contentApiUrl + '/bears', function (err, response, body) {
        if (err) {
            return cb(err);
        }
        var data = JSON.parse(body);
        var apiInstance = response.headers["x-mesos-taskid"];
        cb(null, data, apiInstance);
    });
}


module.exports = {
    getBears: getBears,
    getSessions: getSessions
};
