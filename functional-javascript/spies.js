function Spy(target, method) {
  // SOLUTION GOES HERE
  var result = {
    count: 0
  };

  var originalFunc = target[method];

  target[method] = function() {
    result.count++;
    return originalFunc.apply(target, arguments);
  };

  return result;
}

module.exports = Spy
