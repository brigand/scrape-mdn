var test = require('tape');
var parseSearch = require('../src/parseSearch');
var html = require('fs').readFileSync('fixtures/search.html', 'utf-8');

test('parseSearch', (t) => {
  var results = parseSearch(html);
  t.equal(results[0].title, 'Array.prototype.map()');
  t.equal(results[0].url, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map');
  t.equal(results[0].description, 'The map() method creates a new array with the results of calling a provided function on every element…element in this array.');
  t.end();
});

