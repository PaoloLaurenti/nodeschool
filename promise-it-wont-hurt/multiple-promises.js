var Q = require('Q')
, def1 = Q.defer()
, def2 = Q.defer();

var all = function(promise1, promise2) {
  var internalDefer = Q.defer()
  , counter = 0
  , result1
  , result2;

  promise1
  .then(function(result) {
    //console.log('aaa');
    result1 = result;
    ++counter;
    if (counter >= 2) internalDefer.resolve([result1, result2]);
  })
  .then(null, internalDefer.reject)
  .done();

  promise2
  .then(function(result) {
    result2 = result;
    ++counter;
    if (counter >= 2) internalDefer.resolve([result1, result2]);
  })
  .then(null, internalDefer.reject)
  .done();

  return internalDefer.promise;
};

all(def1.promise, def2.promise)
.then(console.log)
.done();

//def1.resolve('PROMISES');

setTimeout(function() {
  def1.resolve('PROMISES');
  def2.resolve('FTW')
}, 200);
