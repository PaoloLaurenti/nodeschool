function duckCount1() {
  // SOLUTION GOES HERE
  var args = arguments;

  return Object.keys(args)
  .map(function(key) {
    return args[key];
  })
  .filter(function(object) {
    return Object.prototype.hasOwnProperty.call(object, 'quack')
  })
  .length;
}

function duckCount() {
  return Array.prototype.slice.call(arguments)
          .filter(function(obj) {
            return Object.prototype.hasOwnProperty.call(obj, 'quack');
          })
          .length;
}

module.exports = duckCount;
