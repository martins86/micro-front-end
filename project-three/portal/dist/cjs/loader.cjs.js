'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-55b843b1.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["component-two.cjs",[[1,"component-two"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
