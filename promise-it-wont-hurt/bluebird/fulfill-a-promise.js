var Promise = require('bluebird');

var delay = function() {
  return new Promise(function(resolve, reject) {
      setTimeout(resolve, 3000);
  });
};

delay()
  .then(function() {
    console.log("RESOLVED!")
  }
);
