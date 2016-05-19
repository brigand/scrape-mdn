var fetch = require('node-fetch');

exports.search = (query) => {
  var url = `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(query)}&topic=html&topic=css&topic=js&topic=api`;
  return fetch(url).then((res) => res.text());
};

