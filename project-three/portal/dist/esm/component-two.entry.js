import { r as registerInstance, h, H as Host } from './index-db8bfbc6.js';

const componentTwoCss = ":host{display:block}";

let ComponentTwo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h3", null, "Painel - Component Two with StencilJS is Running!!"), h("span", null, "Text in Component Two 1"), h("hr", null), h("slot", null)));
  }
};
ComponentTwo.style = componentTwoCss;

export { ComponentTwo as component_two };
