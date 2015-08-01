var http = require('http')
, async = require('async');

var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];

async.each(urls, function(item, done) {
  http.get(item, function(res) {
    res.on('end', function(){
      done();
    });
  }).on('error', function(err) {
    done(err);
  });
}, function(err) {
  if (err)
    console.log(err);
});
