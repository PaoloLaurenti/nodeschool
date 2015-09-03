var Promise = require('bluebird');

var switchPromise = function() {
  return new Promise(function(resolve, reject) {
      resolve('I FIRED');
      reject('I DID NOT FIRED');
  });
};

switchPromise()
  .then(console.log, console.log);
