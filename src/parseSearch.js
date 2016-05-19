var cheerio = require('cheerio');

module.exports = function(html) {
  var $ = cheerio.load(html);
  var resultElements = $('.result-list').find('.result-list-item');
  resultElements = [].slice.call(resultElements);
  return resultElements.map((el) => {
    var $el = $(el);
    var title = $el.find('h4 a').text();
    var url = $el.find('h4 a').attr('href');
    var description = $el.find('p').first().text();

    return {title, description, url};
  });
};

