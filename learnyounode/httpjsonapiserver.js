var http = require('http');
var url = require('url');

var port = process.argv[2];

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  if (req.method != "GET")
  return res.end('send me a GET\n');

  var requestUrl = url.parse(req.url, true);
  var isoTime = requestUrl.query.iso;

  var date = new Date(isoTime);
  var response;

  if (/^\/api\/parsetime/.test(req.url))
    response = parsetime(date);
  else if (/^\/api\/unixtime/.test(req.url))
    response = unixtime(date);

  if (!response) {
    res.writeHead(404)
    res.end()
  }

  res.writeHead(200, { 'content-type': 'application/json' });
  return res.end(JSON.stringify(response));
});
server.listen(port);
