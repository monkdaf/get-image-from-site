#!/usr/bin/env node
// @flow

import fetch from 'node-fetch';
import cheerio from 'cheerio';
import debug from 'debug';

const getCountPagesLog = debug('getCountPages');
const errorLog = debug('error');

/**
 * Get numbers of pages products from html data.
 * @param {string} url Input url
 * @returns {Number} Return number of pages
 */

const getCountPages = (url: string) => {
  getCountPagesLog('Start');
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.text())
    .then((html) => {
      if (!html) {
        getCountPagesLog('param "html" is empty');
        reject('body "html" is empty');
        return 0;
      }
      getCountPagesLog('param "html" is not empty');
      const numbers = [];
      const $ = cheerio.load(html);
      const links = $('div[class=pagination-container]').children('ul').children('li');
      if (links.length === 0) {
        getCountPagesLog('links is empty');
        resolve(1);
        return 1;
      }
      links.each((i, link) => {
        const number = $(link).text();
        numbers.push(number);
      });
      resolve(Number(numbers[numbers.length - 2]));
      return Number(numbers[numbers.length - 2]);
    })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
  });
};

export default getCountPages;
