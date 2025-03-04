import { printHelloWorld } from './utils';
import { registerStyle, applyStyle, getScopeId, getStyleContainerNode } from './utils/componentBase';

import * as compCss from './scss/hello-world.scss';

class HelloWorld extends HTMLElement {
  static tagName = 'hello-world';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['message'];
  }

  connectedCallback() {
    this.applyRender(true);

    printHelloWorld();

    for (const prop of (this.constructor as any).observedAttributes) {
      if (this.hasAttribute(prop)) {
        this[prop] = this.getAttribute(prop);
      }
    }
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.applyRender();
    }
  }

  applyRender(isInitialLoad = false) {
    const { shadowRoot } = this;
    const compRender = this.render();

    const template = document.createElement('template');

    template.innerHTML = '';

    template.innerHTML += `${compRender}`;

    if (isInitialLoad) {
      shadowRoot.innerHTML = '';

      const scopeId = getScopeId(HelloWorld.tagName);

      registerStyle(scopeId, compCss, true);

      const styleContainerNode = getStyleContainerNode(this);

      applyStyle(styleContainerNode, scopeId);

      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  get message() {
    return this.getAttribute('message');
  }

  set message(value) {
    this.setAttribute('message', value);
  }

  render() {
    return `
        <h1 class="hello-world">Hello ${this.message} ... feature on (0.0.1-beta.1)</h1>
      `;
  }
}

export const defineCustomElements = () => {
  customElements.define(HelloWorld.tagName, HelloWorld);
};

export default HelloWorld;
