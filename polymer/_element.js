import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-counter`
 * it counts
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerCounter extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-counter',
      },
    };
  }
}

window.customElements.define('polymer-counter', PolymerCounter);
