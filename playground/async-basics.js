console.log('staring app');

setTimeout( function() {
    console.log('Inside of callback');
}, 2000);

setTimeout(function(){
    console.log('Second Timeout');
}, 0);

console. log('Finishing Up');