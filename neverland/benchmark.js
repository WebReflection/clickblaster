const {
  default: stardust,
  html,
  useEffect, useRef, useState
} = neverland;

const Counter = stardust(function () {
  const [count, setCount] = useState(0);
  const [icount, setICount] = useState(0);
  const {current: increment} = useRef(1 + Math.floor(Math.random() * 5));
  window.count = count;
  return html`
  <div>
    Count ${count}<br>
    Increment ${increment}<br>
    <button onclick=${function () {
      setCount(count + 1);
      setICount(icount + 1);
    }} clicks=${count}>
      Current ${icount}
    </button>
  </div>`;
});

function setup() {
  document.body.appendChild(Counter());
}
