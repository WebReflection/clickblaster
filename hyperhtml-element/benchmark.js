class HyperCounter extends HyperHTMLElement {
  get defaultState() {
    return {
      count: 0,
      icount: 0,
      increment: 1 + Math.floor(Math.random() * 5)
    };
  }
  onclick() {
    const {count, icount, increment} = this.state;
    window.count = count + 1;
    this.setState({
      count: count + 1,
      icount: icount + increment
    });
  }
  connectedCallback() {
    resolve(this.querySelector('button'));
  }
  render() {
    const {count, icount, increment} = this.state;
    return this.html`
    <div>
      Count ${count}<br>
      Increment ${increment}<br>
      <button onclick=${this} clicks=${count}>
        Current ${icount}
      </button>
    </div>`;
  }
}

HyperCounter.define('hyper-counter');

let resolve;
window.setup = () => new Promise($ => {
  resolve = $;
  document.body.appendChild(new HyperCounter);
});
