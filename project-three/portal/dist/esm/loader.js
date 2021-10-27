import { p as promiseResolve, b as bootstrapLazy } from './index-db8bfbc6.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["component-two",[[1,"component-two"]]]], options);
  });
};

export { defineCustomElements };
