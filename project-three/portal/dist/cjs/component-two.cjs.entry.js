'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-55b843b1.js');

const componentTwoCss = ":host{display:block}";

let ComponentTwo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h3", null, "Painel - Component Two with StencilJS is Running!!"), index.h("span", null, "Text in Component Two 1"), index.h("hr", null), index.h("slot", null)));
  }
};
ComponentTwo.style = componentTwoCss;

exports.component_two = ComponentTwo;
