import cheerio from 'cheerio';
import debug from 'debug';
import urlapi from 'url';

const getProductListLog = debug('getProductList');

const getProductList = (html) => {
  if (!html) {
    getProductListLog('param "html" is empty');
    return [];
  }
  getProductListLog('param "html" is not empty');
  const list = [];

  const $ = cheerio.load(html);
  const links = $('a[class=image-cover]');

  links.each((i, link) => {
    const url = $(link).attr('href');
    const name = urlapi.parse(url).pathname.split('/').pop();
    // const name = `${namefile[0]}_${i}.${namefile[1]}`;
    getProductListLog('parse name "%s"', name);
    // console.log(`name=${name}`);
    const item = {
      name,
      url,
    };
    list.push(item);
  });
  return list;
};

export default getProductList;
