const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const wearther = require('./weather/weather');
const axios  = require('axios');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch warher for',
        string: true
    }
}).help().alias('help', 'h').argv;

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.address) + '&key=AIzaSyBvfNA645bS3kxr9oSg2A8PVo4dYopucAo'

axios.get(url).then(function (value) {

    if (value.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address.');
    }

    var lat = value.data.results[0].geometry.location.lat;
    var lng = value.data.results[0].geometry.location.lng;

    var weatherUrl = 'https://api.darksky.net/forecast/c2defe7793cb0deee3ab927ac5fe1238/'+ lat +','+ lng;

    console.log(value.data.results[0].formatted_address);

    return axios.get(weatherUrl);

}).then(function (value) {
    var temperature = value.data.currently.temperature;
    var apperentTemperature = value.data.currently.apparentTemperature;

    console.log('Its currently ' + temperature + '. It feels like ' + apperentTemperature);

}).catch(function (reason) {
    if(reason.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    }else {
        console.log(reason.message);
    }
});