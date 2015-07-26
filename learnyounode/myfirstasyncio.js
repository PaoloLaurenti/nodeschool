var fs = require('fs');
var filePath = process.argv[2];
var newLinesCount = fs.readFile(filePath, 'utf8', function(err, data){
  if (err)
    return;

  var newLinesCount = data.split('\n').length - 1;
  console.log(newLinesCount);
});
