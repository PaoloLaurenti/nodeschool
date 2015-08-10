var duplexer2 = require('duplexer2');
var through2 = require('through2').obj;

module.exports = function(counter) {
  var countries = {};

  function write(obj, _, next) {
    countries[obj.country] = (countries[obj.country] || 0) + 1;
    next();
  }

  function end(done) {
    counter.setCounts(countries);
    done();
  }

  var input = through2(write, end);
  return duplexer2(input, counter);
};
