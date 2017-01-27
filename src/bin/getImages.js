#!/usr/bin/env node
// @flow

import fetch from 'node-fetch';
import debug from 'debug';
import fs from 'fs';
import getImageList from '../getImageList';
import getAllProducts from '../getAllProducts';

// console.log(half(Number(process.argv[process.argv.length - 1])));
// console.log(`Arguments is (${process.argv.length}) ${process.argv}`);
const command = process.argv[2];
const patch = process.argv[3];

const getImagesLog = debug('getImages');
const errorLog = debug('error');


if (command === 'list') {
  console.log(getAllProducts(patch, 2));

  // // fetch(patch)
  // .then(res => res.text())
  // .then(body => getImageList(body))
  // .then((arr) => {
  //   getImagesLog('get array with lists');
  //   getImagesLog('array => JSON is:\r\n%s', JSON.stringify(arr, null, ' '));
  //   // console.log(arr);
  //   // console.log(JSON.stringify(arr, null, ' '));
  //   // console.log(JSON.stringify(arr));
  //   return JSON.stringify(arr, null, ' ');
  // })
  // .then((json) => {
  //   fs.writeFile('temp/list.json', json, (err) => {
  //     if (err) throw err;
  //     getImagesLog('list.json is saved!');
  //   });
  // })
  // .catch((err) => {
  //   errorLog('Error is %s', err);
  //   // console.error(err);
  // });
}

if (command === 'img') {
  // some task for processing images
}
