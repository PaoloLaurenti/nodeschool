var fs = require('fs');
var path = require('path');
var directoryPath = process.argv[2];
var requiredExtension = process.argv[3];

fs.readdir(directoryPath, function(err, list){
  var filteredList = list.filter(function(fileName){
    return path.extname(fileName) === '.' + requiredExtension;
  });

  filteredList.forEach(function(entry){
    console.log(entry);
  });
});
