module.exports = (...numbers) => {
  var sum = numbers.reduce((soFar, value) => soFar + value, 0);
  return sum / numbers.length;
};
