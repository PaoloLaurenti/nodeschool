var http = require('http')
, async = require('async');

var hostname = process.argv[2];
var port = process.argv[3];

async.series({
  post: function(done) {
    var opts = {
      hostname: hostname,
      port: port,
      path: '/users/create',
      method: 'POST'
    };

    async.times(5, function(n, next) {
      httpRequest(opts, { user_id: n + 1 }, function(err, user) {
        next(err, user);
      });
    }, function(err, results) {
      if (err)
        return console.error(err);

      done(null, "saved");
    });
  },
  get: function(done) {
    var opts = {
      hostname: hostname,
      port: port,
      path: '/users',
      method: 'GET'
    };

    httpRequest(opts, null, done);
  }
}, function(err, results) {
  if (err)
    return console.error(err);

  console.log(results.get);
});

function httpRequest(opts, requestBody, done) {
  var responseBody = '';
  var req = http.request(opts, function(res) {
    res.on('data', function(chunk) {
      responseBody += chunk.toString();
    });
    res.on('end', function() {
      return done(null, responseBody);
    });
  }).on('error', function(err) {
    done(err);
  });

  if (requestBody) req.write(JSON.stringify(requestBody));
  req.end();
}
