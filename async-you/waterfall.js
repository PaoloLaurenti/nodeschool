var http = require('http')
, async = require('async')
, fs = require('fs');

async.waterfall([
  function(cb) {
    cb(null, process.argv[2]);
  },
  function(fileFullPath, cb) {
    fs.readFile(fileFullPath, 'utf8', cb);
  },
  function(url, cb) {
    var body = '';
    http.get(url, function(res){
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
], function(err, result) {
  if (err)
    return console.error(err);

  console.log(result);
});
