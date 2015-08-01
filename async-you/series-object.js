var http = require('http')
, async = require('async');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];

function httpGet(url, cb) {
  var body = '';
  http.get(url, function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });
    res.on('end', function(){
      cb(null, body);
    });
  }).on('error', function(err) {
    cb(err);
  });
}

async.series({
  requestOne: function(done) {
    httpGet(urlOne, done);
  },
  requestTwo: function(done) {
    httpGet(urlTwo, done);
  }
}, function(err, result) {
  if (err != null)
  return console.error(err);

  console.log(result);
});
