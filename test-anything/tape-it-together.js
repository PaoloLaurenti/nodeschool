var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify', function(t) {
  t.equal(fancify('something'), '~*~something~*~', 'Wraps strings in ~*~');
  t.equal(fancify('something', true), '~*~SOMETHING~*~', 'Optionally makes it ALLCAPS');
  t.equal(fancify('something', false, '%'), '~%~something~%~', 'Optionally allows to set the character');
  t.end();
});
