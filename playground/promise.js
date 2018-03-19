var asyncAdd = function(a, b){
  return new Promise(function (resolve, reject) {
      setTimeout(function () {
          if (typeof a === 'number' && typeof b === 'number'){
              resolve(a + b);
          }else {
              reject('Args must be numbers');
          }
      }, 1500);
  });
};


asyncAdd(5, '7').then(function (value) {
    console.log('Result: ', value);
    return asyncAdd(value, 33);
}).then(function (value) {
    console.log('Should be 45', value);
}).catch(function (reason) {
   console.log(reason);
});


/*
asyncAdd(5, '7').then(function (value) {
    console.log('Result: ', value);
    return asyncAdd(value, '33');
}, function (reason) {
    console.log(reason);
}).then(function (value) {
   console.log('Should be 45', value);
}, function (reason) {
    console.log(reason);
});
*/


/*var somePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
       //resolve('Hey. It Work !');
        reject('Unable to fulfill promise');
    }, 2500);
});

somePromise.t hen(function (value) {
   console.log('Success:', value);
}, function (reason) {
    console.log('Error: ', reason);
});*/