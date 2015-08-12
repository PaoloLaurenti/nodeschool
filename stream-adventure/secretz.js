var tar = require('tar');
var crypto = require('crypto');
var zlib = require('zlib');
var through2 = require('through2');

var parser = tar.Parse();
parser.on('entry', function (entry) {
  if (entry.type != 'File')
    return;

  entry
    .pipe(crypto.createHash('md5', { encoding: 'hex' }))
    .pipe(through2(function(buffer, _, next){
      this.push(buffer.toString() + ' ' + entry.path + '\n');
      next();
    }))
    .pipe(process.stdout);

});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())
  .pipe(parser);
