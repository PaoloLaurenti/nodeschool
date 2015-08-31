var qhttp = require('q-io/http')
, _ = require('lodash')
, cachePath = "http://localhost:7000/"
, dbPath = "http://localhost:7001/";

var concat = function(suffix) {
  return this + suffix;
};

//var buildDbPath = _.bind(String.prototype.concat, dbPath);
var buildDbPath = _.bind(concat, dbPath);

qhttp.read(cachePath)
.then(_.flow(buildDbPath, qhttp.read))
.then(_.flow(JSON.parse, console.log))
.then(null, console.error)
.done();
