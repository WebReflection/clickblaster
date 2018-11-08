# ⚡️ clickblaster 🔥

An agnostic framework benchmark about repeated, sparse, updates per single element.

Testing hyperHTML and hooks like potentials, to see how relevant these are.

### Example

```js
// neverland benchmark
const Counter = stardust(() => {
  const [count, setCount] = useState(0);
  const [icount, setICount] = useState(0);
  const {current: increment} = useRef(1 + Math.floor(Math.random() * 5));
  // export the `count` value as global
  window.count = count;
  return html`
  <div>
    Count ${count}<br>
    Increment ${increment}<br>
    <button onclick=${() => {
      setCount(count + 1);
      setICount(icount + 1);
    }} clicks=${count}>
      Current ${icount}
    </button>
  </div>`;
});
```

## How To Benchmark

Add a folder with the framework/libary/utility package name, and put an `index.html` and at least a `benchmark.js` in it, as it is for the [vanilla](./vanilla/) folder one.

As long as you export **a global setup** function that crates a **global button** that once clicked, increments the **global counter**, which **starts from 0**, you are good to go.

Once you have a usable test, add a `<div id="package-name"></div>` to the main [index.html](./index.html) file.

Use [the live page](https://webreflection.github.io/clickblaster/) and eventually add `?100` or `?9000` to change stress level and see how all frameworks responds.
