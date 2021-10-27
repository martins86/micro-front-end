import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const componentTwoCss = ":host{display:block}";

let ComponentTwo$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("h3", null, "Painel - Component Two with StencilJS is Running!!"), h("span", null, "Text in Component Two 1"), h("hr", null), h("slot", null)));
  }
  static get style() { return componentTwoCss; }
};

const ComponentTwo = /*@__PURE__*/proxyCustomElement(ComponentTwo$1, [1,"component-two"]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ComponentTwo
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ComponentTwo, defineCustomElements };
