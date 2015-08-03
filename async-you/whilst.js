var http = require('http')
, async = require('async');

var url = process.argv[2];
var responseBody = '';
var responseTarget = 'meerkat';
var attemptsCount = 0;

async.whilst(
  function() {
    return responseBody != responseTarget;
  },
  function(callback) {
    httpGet(url, function(err, response) {
      if (err)
        return console.error(err);
      responseBody += response.toString().trim();

      attemptsCount++;
      callback(null);
    });
  },
  function(err) {
    if (err)
      return console.error(err);

    console.log(attemptsCount);
  }
);

function httpGet(url, done) {
  var body = '';
  http.get(url, function(res){
    res.on('data', function(chunk){
      body += chunk.toString();
    });
    res.on('end', function(){
      done(null, body);
    });
  }).on('error', function(err) {
    done(err);
  });
}
