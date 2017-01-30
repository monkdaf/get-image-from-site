#!/usr/bin/env node
// @flow

import fetch from 'node-fetch';
import debug from 'debug';
import getImageList from './getImageList';

const getImageListFromUrlLog = debug('getImageListFromUrl');
const errorLog = debug('error');

const getImageListFromUrl = (url: string) => {
  getImageListFromUrlLog('Start with url: %s', url);
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.text())
    .then(html => getImageList(html))
    .then((list) => {
      getImageListFromUrlLog('Images list is %s', JSON.stringify(list, null, ' '));
      resolve(list);
    })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
  });
};

export default getImageListFromUrl;
