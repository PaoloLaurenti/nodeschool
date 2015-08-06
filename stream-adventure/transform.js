var through = require('through2');
var tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
