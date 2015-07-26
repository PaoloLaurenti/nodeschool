var fs = require('fs');
var path = require('path');

module.exports = function(directoryPath, requiredExtension, callback) {
  fs.readdir(directoryPath, function(err, list){
    if (err)
      return callback(err);

    var filteredList = list.filter(function(fileName){
      return path.extname(fileName) === '.' + requiredExtension;
    });

    callback(null, filteredList);
  });
};
