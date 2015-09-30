function reduce(arr, fn, initial) {
  var value = fn(initial, arr[0], arr.indexOf(arr[0]), arr);
  if (arr.length === 1)
    return value;
  return reduce(arr.slice(1), fn, value)
}

module.exports = reduce;
