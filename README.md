[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![Build Status](https://travis-ci.org/bharathvaj1995/array-random-shuffle.svg?branch=master)](https://travis-ci.org/bharathvaj1995/ip-geoinfo) 
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

# ip-geoinfo    

Get geolocation information about an IP Address using promise.

## Installation
```
npm install ip-geoinfo --save
```
## Dependencies
npm install require --save
npm install require-promise --save

## Usuage
```javascript
var getgeoip = require('ip-geoinfo');
var ipAddress = '8.8.8.8';

getgeoip(ipAddress).then(function (geoData) {
    console.log(geoData);
    /*=>{ ip: '8.8.8.8',
            city: 'Mountain View',
            region: 'California',
            country: 'US',
            country_name: 'United States',
            postal: '94035',
            latitude: 37.386,
            longitude: -122.0838,
            timezone: 'America/Los_Angeles' }  */
});

```
## License

MIT © [Bharathvaj Ganesan](https://github.com/bharathvaj1995)