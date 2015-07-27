var http = require('http');
var firstUrl = process.argv[2];
var secondUrl = process.argv[3];
var thirdUrl = process.argv[4];

var firstContent = "";
var secondContent = "";
var thirdContent = "";

getHttpContent(firstUrl, function(error, content) {
  if (error)
    console.error(error);

  firstContent = content;
  //console.log("firstContent " + firstContent);
  printResponse(firstContent, secondContent, thirdContent);
});

getHttpContent(secondUrl, function(error, content) {
  if (error)
    console.error(error);

  secondContent = content;
  //console.log("secondContent " + secondContent);
  printResponse(firstContent, secondContent, thirdContent);
});

getHttpContent(thirdUrl, function(error, content) {
  if (error)
    console.error(error);

  thirdContent = content;
  //console.log("thirdContent " + thirdContent);
  printResponse(firstContent, secondContent, thirdContent);
});

function getHttpContent(url, callback) {
  http.get(url, function(response) {
    var allData = "";
    response.setEncoding('utf8');

    response.on('data', function(data) {
      allData += data;
    });

    response.on('error', function(error) {
      callback(error);
    });

    response.on('end', function() {
      callback(null, allData);
    });
  });
}

function printResponse(firstContent, secondContent, thirdContent) {
  if (firstContent !== "" && secondContent !== "" && thirdContent !== "") {
    console.log(firstContent);
    console.log(secondContent);
    console.log(thirdContent);
  }
}
