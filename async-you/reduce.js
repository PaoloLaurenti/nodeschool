var http = require('http')
, async = require('async');

var url = process.argv[2];
var arr = ['one', 'two', 'three']

async.reduce(arr, 0, function(memo, item, callback) {
  httpGet(url + '?number=' + item, function(err, result) {
    callback(null, memo + Number(result));
  });
}, function(err, result) {
  if (err)
    return console.error(err);

  console.log(result);
});

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
