#!/usr/bin/env node
// @flow

// import fetch from 'node-fetch';
import debug from 'debug';
import fs from 'fs';
import getAllImages from '../getAllImages';
import getAllProducts from '../getAllProducts';
// import downloadAllImages from '../downloadAllImages';
import downloadImages from '../downloadImages';
import getCountPages from '../getCountPages';

const INTERVAL_MS = 70;
// const PAGES = 1;

const command = process.argv[2];
const path = process.argv[3];

const getImagesLog = debug('getImages');
const errorLog = debug('error');

fs.access('outImages', fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdirSync('outImages');
  }
});

if (command === 'list') {
  getImagesLog('Start');
  getCountPages(path)
  .then((pages) => {
    getImagesLog(`pages=${pages}`);
    return getAllProducts(path, pages, []);
  })
  .then((list) => {
    getImagesLog('Count of products: %s', list.length);
    return getAllImages(list);
  })
  .then((list) => {
    getImagesLog('Count of images: %s', list.length);
    return list;
  })
  // .then(list => downloadAllImages(list))
  .then((list) => {
    getImagesLog('Total count of images : %s', list.length);
    if (list.count === 0) {
      throw new Error('No iages');
    }
    downloadImages(list, INTERVAL_MS);
  })
  .catch((err) => {
    errorLog('Error is %s', err);
  });
}

if (command === 'img') {
  // some task for processing images
}
