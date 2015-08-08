var concat = require('concat-stream');
var through = require('through2');

process
  .stdin
  .pipe(concat(function(data) {
    var result = data.toString().split('').reverse().join('');
    process.stdout.write(result);
  }));
