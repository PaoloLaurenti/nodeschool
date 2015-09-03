var Promise = require('bluebird');

var printPromise = new Promise(function(resolve, reject) {
  resolve("SECOND");
});

printPromise
  .then(console.log);
console.log("FIRST");
