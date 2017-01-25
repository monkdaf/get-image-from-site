import cheerio from 'cheerio';
import debug from 'debug';

const getCountPagesLog = debug('getCountPages');

const getCountPages = (html) => {
  if (!html) {
    getCountPagesLog('param "html" is empty');
    return 0;
  }
  getCountPagesLog('param "html" is not empty');
  const numbers = [];
  const $ = cheerio.load(html);
  const links = $('div[class=pagination-container]').children('ul').children('li');

  links.each((i, link) => {
    const number = $(link).text();
    numbers.push(number);
  });
  return Number(numbers[numbers.length - 2]);
};

export default getCountPages;
