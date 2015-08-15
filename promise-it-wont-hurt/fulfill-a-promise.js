var q = require('q');
var deferred = q.defer();
deferred.promise.then(function(obj) {
  console.log(obj);
});

setTimeout(deferred.resolve, 300, "RESOLVED!");
