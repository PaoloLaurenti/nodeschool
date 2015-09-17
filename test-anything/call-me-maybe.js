var test = require('tape');
var repeatCallback = require(process.argv[2]);

test('repeatCallback', function(t) {
  var times = 5;
  t.plan(times);
  repeatCallback(times, function() {
    t.pass('callback called');
  });
});
