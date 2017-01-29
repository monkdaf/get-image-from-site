#!/usr/bin/env node
// @flow

import debug from 'debug';

import getImageListFromUrl from './getImageListFromUrl';

const getAllImagesLog = debug('getAllImages');
const errorLog = debug('error');


/**
 * Get list of images from products list.
 * @param {Array} list  Array of object with list of products
 * @returns {Array} Return array of object with list of images
 */

function getAllImages(list: Array) {
  getAllImagesLog('Start');
  return new Promise((resolve, reject) => {
    if (!list || list === []) {
      resolve([]);
    }
    // const imagesList = list.map((curr) => {
    //   getAllImagesLog('processing %s', curr.name);
    //   return getImageListFromUrl(curr.url);
    //   // const listImg = getImageListFromUrl(curr.url);
    //   // getAllImagesLog('listImg %s', listImg.toString());
    //   // return prev.concat(listImg);
    // }, []);
    // const promiseList = list.map(item => getImageListFromUrl(item.url));
    // getAllImagesLog('imagesList is %s', promiseList); // imagesList);
// getAllImagesLog('list[0].url = %s', list[0].url);
    getImageListFromUrl(list[0].url)
    .then((res) => {
      getAllImagesLog('resImagesList is %s', res);
    })
    .then(res => resolve(res))
    // resolve(imagesList);
    // Promise.all(promiseList)
    // .then((res) => {
    //   getAllImagesLog('resImagesList is %s', res);
    //   resolve(res);
    // })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
    return [];
  });
}


export default getAllImages;
