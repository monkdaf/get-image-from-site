import cheerio from 'cheerio';
import debug from 'debug';
import urlapi from 'url';

const getImageListLog = debug('getImageList');

const getImageList = (html) => {
  if (!html) {
    getImageListLog('param "html" is empty');
    return [];
  }
  getImageListLog('param "html" is not empty');
  // let lists = [{ name: 'testname', url: 'testurl' }, { name: 'testname2', url: 'testurl2' }];
  const list = [];

  const $ = cheerio.load(html);
  const links = $('a[data-zoom-id=zoom]');

  links.each((i, link) => {
    const url = $(link).attr('href');
    const namefile = urlapi.parse(url).pathname.split('/').pop().split('.');
    const name = `${namefile[0]}_${i}.${namefile[1]}`;
    getImageListLog('parse name "%s"', name);
    // console.log(`name=${name}`);
    const item = {
      name,
      url,
    };
    list.push(item);
  });
  return list;
};

export default getImageList;
