var Promise = require('bluebird');

var switchPromise = function() {
  return new Promise(function(resolve, reject) {
      //setTimeout(reject, 3000, new Error("REJECTED!"));
      resolve('I FIRED');
      reject('I DID NOT FIRED');
  });
};

switchPromise()
  .then(console.log, console.log);
