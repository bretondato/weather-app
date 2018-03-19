const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const wearther = require('./weather/weather');

const argv = yargs.options({
   a: {
       demand: true,
       alias: 'address',
       describe: 'Address to fetch warher for',
       string: true
   }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, function (errorMessage, results) {
    if (errorMessage){
        console.log(errorMessage);
    }else {
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        wearther.getWeather(results.latitude, results.longitude, function (errorMessage, wResults) {
            if (errorMessage){
                console.log(errorMessage);
            }else {
                //console.log(JSON.stringify(wResults, undefined, 2));
                console.log('The currently Temperature is ' + wResults.temperature);
            }
        })
    }
});



