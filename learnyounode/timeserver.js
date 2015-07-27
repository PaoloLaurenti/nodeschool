var net = require('net');
var strftime = require('strftime');
var env = require('os');

var port = process.argv[2];

var server = net.createServer(function (socket) {
  data = strftime('%Y-%m-%d %H:%M');
  socket.end(data + env.EOL);
})
server.listen(port)
