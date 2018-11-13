const { bind, Component } = hyperHTML;

class Counter extends Component {
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

window.setup = () => {
  const { body } = document;
  bind(body)`${Counter.for(body)}`;
};
