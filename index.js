/*jslint node: true */
'use strict';
var rp = require('request-promise');

module.exports = function (ipAddress) {    
    var req = {
        uri: 'https://ipapi.co/'+ipAddress+'/json/',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response 
    };
    return rp(req)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            console.log("Error timeout"); 
        });
};
