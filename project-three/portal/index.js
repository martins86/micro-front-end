class IndexComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = `
        <style>
        :host {
            color: orange;
            font-size: 1.5rem;
        }
        
        .text-h3-component {
            font-size: 1.17em;
            color: #000000;
        }
        </style>
        
        <h3 class="text-h3-component">Painel - Index Component is Running!!</h3>
        <span>Text in Component Index 1</span>
        <hr>
        <slot></slot>
        `;

    this.shadow.innerHTML = template;
  }
}

customElements.define("component-index", IndexComponent);
