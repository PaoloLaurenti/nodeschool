var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
  var allData = "";
  response.setEncoding('utf8');

  response.on('data', function(data) {
    allData += data;
  });

  response.on('end', function() {
    console.log(allData.length);
    console.log(allData);
  });
});
