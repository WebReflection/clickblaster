import { html, PolymerElement } from "./modules/@polymer/polymer/polymer-element.js";
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
      <div>
        Count [[count]]<br>
        Increment [[increment]]<br>
        <button on-click="handleClick" clicks$="[[count]]">
          Current [[icount]]
        </button>
      </div>
    `;
  }

  static get properties() {
    return {
      count: {
        type: Number,
        value: 0
      },
      icount: {
        type: Number,
        value: 0
      },
      increment: {
        type: Number,
        value: 1 + Math.floor(Math.random() * 5)
      }
    };
  }

  ready() {
    super.ready();
    resolve(this.shadowRoot.querySelector('button'));
  }

  handleClick() {
    this.count += 1;
    this.icount += this.increment;
    window.count = this.count;
  }

}

window.customElements.define('polymer-counter', PolymerCounter);
let resolve;

window.setup = () => new Promise($ => {
  resolve = $;
  document.body.appendChild(new PolymerCounter());
});
