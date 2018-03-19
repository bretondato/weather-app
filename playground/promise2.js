const request = require('request');

var geoCodeAddress = function (address){
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + '&key=AIzaSyBvfNA645bS3kxr9oSg2A8PVo4dYopucAo'

    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            //console.log(JSON.stringify(body, undefined, 2));

            if(error){
                reject('Unable to connect with Google servers');
            }else if (body.status === 'ZERO_RESULTS'){
                reject('Unable to find this address');
            }else if (body.status === 'OK'){
                resolve({
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geoCodeAddress('09715-120').then(function (value) {
    console.log(JSON.stringify(value, undefined, 2));
}, function (reason) {
   console.log(reason);
});
