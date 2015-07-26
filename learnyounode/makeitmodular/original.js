var module = require('./filteredListfile');

var directoryPath = process.argv[2];
var requiredExtension = process.argv[3];

module(directoryPath, requiredExtension, function(err, data) {
  if (err)
        return console.error('There was an error:', err)

  data.forEach(function(entry){
    console.log(entry);
  });
});
