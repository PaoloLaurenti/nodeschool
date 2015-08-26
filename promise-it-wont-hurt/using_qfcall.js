var Q = require('q');

var jsonArg = process.argv[2];

// var parsePromised = function(json) {
//   var defer = q.defer();
//   try {
//     var a = JSON.parse(json);
//     defer.resolve(a);
//   } catch (e) {
//     defer.reject(e);
//   }
//   return defer.promise;
// };

//parsePromised(jsonArg)
Q.fcall(JSON.parse, jsonArg)
  .then(null, console.log);
