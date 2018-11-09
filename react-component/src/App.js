import React, { Component } from 'react';

class App extends Component {
  state = {
    increment: 1 + Math.floor(Math.random() * 5),
    count: 0,
    icount: 0
  };
  render() {
    const {count, icount, increment} = this.state;
    window.count = count;
    return (
      <div>
        Count {count}<br />
        Increment {increment}<br />
        <button onClick={() => this.setState({
          count: count + 1,
          icount: icount + increment
        })} clicks={count}>
          Current {icount}
        </button>
      </div>
    );
  }
}

export default App;
