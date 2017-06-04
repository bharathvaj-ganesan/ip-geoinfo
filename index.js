/*jslint node: true */
'use strict';
const rp = require('request-promise');
const ipGeoInfo = module.exports = function (ipAddress) {
    
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {
        const req = {
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
                console.log("Not  valid ip"); 
            });
    } else {
        throw new Error ("Not a valid ip");
    }
    
};