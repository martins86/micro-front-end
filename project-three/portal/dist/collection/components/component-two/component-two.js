import { Component, Host, h } from '@stencil/core';
export class ComponentTwo {
  render() {
    return (h(Host, null,
      h("h3", null, "Painel - Component Two with StencilJS is Running!!"),
      h("span", null, "Text in Component Two 1"),
      h("hr", null),
      h("slot", null)));
  }
  static get is() { return "component-two"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["component-two.css"]
  }; }
  static get styleUrls() { return {
    "$": ["component-two.css"]
  }; }
}
