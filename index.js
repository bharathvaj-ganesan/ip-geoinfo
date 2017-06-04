/*jslint node: true */
'use strict';
const rp = require('request-promise'),
      ipGeoInfo = module.exports = (ipAddress) => {
    
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {
        const req = {
            uri: 'https://ipapi.co/'+ipAddress+'/json/',
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response 
        };
        return rp(req)
            .then( (res) => {
                return res;
            })
            .catch( (err) => {
                console.log("Timeout"); 
            });
    } else {
        throw new Error ("Not a valid ip");
    }
    
};