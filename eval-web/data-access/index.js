'use strict';

var request = require('request');

var contentApiUrl = process.env.CONTENT_API_URL;

function getSessions(cb) {
    console.log(contentApiUrl);
    request(contentApiUrl + '/sessions', function (err, response, body) {
        if (err) {
            console.log(err);
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
