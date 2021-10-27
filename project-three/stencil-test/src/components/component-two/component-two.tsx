import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-two',
  styleUrl: 'component-two.css',
  shadow: true,
})
export class ComponentTwo {

  render() {
    return (
      <Host>
        <h3>Painel - Component Two with StencilJS is Running!!</h3>
        <span>Text in Component Two 1</span>
        <hr />
        <slot></slot>
      </Host>
    );
  }

}
