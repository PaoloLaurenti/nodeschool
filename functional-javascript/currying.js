function curryN(fn, n) {
  var curryCount = n || fn.length;
  return innerCurry([]);

  function innerCurry(prevArgs) {
    return function(par) {
      var args = prevArgs.concat(par);
      if (args.length === curryCount) {
        return fn.apply(this, args);
      }
      return innerCurry(args);
    };
  }
}



module.exports = curryN
