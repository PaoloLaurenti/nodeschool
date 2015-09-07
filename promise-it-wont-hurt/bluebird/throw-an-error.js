var Promise = require('bluebird');

var jsonArg = process.argv[2];

Promise
  .resolve(JSON.parse(jsonArg))
  .then(console.log)
  .catch(console.log);
