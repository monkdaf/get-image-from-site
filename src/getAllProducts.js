#!/usr/bin/env node
// @flow

import fetch from 'node-fetch';
import debug from 'debug';

import getProductList from './getProductList';

const getAllProductsLog = debug('getAllProducts');
const errorLog = debug('error');


/**
 * Get list of products from html data.
 * @param {string} url Input url pages with products
 * @param {Number} page current page
 * @returns {Array} Return array of object with list of products
 */

const getAllProducts = (url: string, page: Number) => {
  getAllProductsLog('get page %s', page);
  if (!page || page === 0) {
    return [];
  }
  let commonList = [];
  const fullUrl = page === 1 ? url : `${url}?page=${page}`;
  getAllProductsLog('fullUrl is %s', fullUrl);
  fetch(fullUrl)
  .then(res => res.text())
  .then(html => getProductList(html))
  .then((list) => {
    getAllProductsLog('list is %s', JSON.stringify(list, null, ' '));
    return list;
  })
  .then(list => [...list, '###', getAllProducts(url, page - 1)])
  .then((list) => {
    getAllProductsLog('commonlist is %s', JSON.stringify(list, null, ' '));
    return list;
  })
  .then((list) => {
    commonList = list;
  })
  .catch((err) => {
    errorLog('Error is %s', err);
    // console.error(err);
  });
  getAllProductsLog('Total commonlist is %s', JSON.stringify(commonList, null, ' '));
  return commonList;
};


export default getAllProducts;
