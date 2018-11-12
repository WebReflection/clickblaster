import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

window.setup = () => {
  ReactDOM.render(<Counter />, document.body);
};
