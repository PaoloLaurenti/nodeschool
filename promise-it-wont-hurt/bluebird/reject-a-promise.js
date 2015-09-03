var Promise = require('bluebird');

var delay = function() {
  return new Promise(function(resolve, reject) {
      setTimeout(reject, 3000, new Error("REJECTED!"));
  });
};

delay()
  .then(null, function(err) {
    console.log(err.message);
  }
);
