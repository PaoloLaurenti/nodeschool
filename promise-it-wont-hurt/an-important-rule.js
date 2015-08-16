var Q = require('Q');

var throwMyGod = function() {
  throw new Error("OH NOES");
};

var iterate = function(arg) {
  console.log(arg);
  return ++arg;
};

Q.fcall(iterate, 1)
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
  .then(null, console.log);
