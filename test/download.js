import test from "tape"
import download from '../src/download';

test("download", (t) => {
  t.plan(1);
  download.search('array.map').then((html) => {
    var title = 'Search Results for &#34;array.map&#34';
    t.ok(html.indexOf(title) !== -1, 'contains tile: ' + title);
  });

})
