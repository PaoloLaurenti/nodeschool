var http = require("q-io/http");

http.read({
  url: 'http://localhost:7000',
  method: 'GET'
})
.then(function(id) {
  return http.read({
    url: 'http://localhost:7001/' + id,
    method: 'GET'
  });
})
.then(function(json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();
