var Promise = require('bluebird');

var delay = function() {
  return new Promise(function(resolve, reject) {
      setTimeout(resolve, 3000, "RESOLVED!");
  });
};

delay()
  .then(function(result) {
    console.log(result)
  }
);
