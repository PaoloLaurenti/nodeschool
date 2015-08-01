var http = require('http')
, async = require('async');

var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];

async.map(urls, function(url, done) {
  var body = '';
  http.get(url, function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });
    res.on('end', function(){
      done(null, body);
    });
  }).on('error', function(err) {
    done(err);
  });
}, function(err, results) {
  if (err)
    return console.error(err);

  console.log(results);
});
