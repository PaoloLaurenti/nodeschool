module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce(function(mappedArr, item) {
    mappedArr.push(fn(item));
    return mappedArr;
  }, []);
};
