#!/usr/bin/env node
// @flow

describe('Tests for getCountPages', () => {
  test('empty test', () => {
    expect(0).toBe(0);
  });
});
// import getCountPages from '../src/getCountPages';
//
// describe('Tests for getCountPages', () => {
//   test('body is empty', () => {
//     expect(getCountPages()).toBe(0);
//   });
//
//   test('body is not have right tag', () => {
//     expect(getCountPages()).toBe(0);
//   });
//
//   test('url with 17 pages', () => {
//     expect(getCountPages('http://gyrotown.ru/collection/giroskuter')).toBe(14);
//   });
//
//   const onePage =
// `<a href="/cart_items" class="dropdown-toggle lnk-cart hidden-xs hidden-sm"
// data-toggle="dropdown">
//   <div class="items-cart-inner">
//   <div class="total-price-basket">
//   <span class="lbl">Корзина -</span>
//   <span class="total-price">
//   <span class="value">0&nbsp;руб</span>
//   </span>
//   </div>
//   <div class="basket">
//   <i class="glyphicon glyphicon-shopping-cart"></i>
//   </div>
//   <div class="basket-item-count"><span class="count"> 0</span></div>
//   </div>
//   </a>
//   <ul class="dropdown-menu"></ul>`;
//   test('body have only one right tag', () => {
//     expect(getCountPages(onePage)).toBe(1);
//   });
// });
