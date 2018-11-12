import React, { useRef, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [icount, setICount] = useState(0);
  const {current: increment} = useRef(1 + Math.floor(Math.random() * 5));
  window.count = count;
  return (
    <div>
      Count {count}<br />
      Increment {increment}<br />
      <button onClick={() => {
        setCount(count + 1);
        setICount(icount + increment);
      }} clicks={count}>
        Current {icount}
      </button>
    </div>
  );
}

export default Counter;
