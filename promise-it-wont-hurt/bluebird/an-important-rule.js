var Promise = require('bluebird');

var throwMyGod = function() {
  throw new Error("OH NOES");
};

var iterate = function(arg) {
  console.log(arg);
  return ++arg;
};

Promise
  .resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(throwMyGod)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(console.log);
