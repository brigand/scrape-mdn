var download = require('./download');
var parseSearch = require('./parseSearch');

exports.search = (query) => {
  return Promise.resolve().then(() => {
    return download(query)
  })
  .then((html) => {
    return parseSearch(html)
  });
};

