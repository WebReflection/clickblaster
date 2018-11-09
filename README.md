# ⚡️ [clickblaster](https://webreflection.github.io/clickblaster/) 🔥

An agnostic framework benchmark about repeated, sparse, updates per single element.

Testing hyperHTML and hooks like potentials, to see how these could affect performance.

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

// export the global setup
function setup() {
  document.body.appendChild(Counter());
}
```

## How To Benchmark

These are the things expected to happen:

  * there is a global `window.setup` **function** that, once invoked by the benchmark, populates the `document.body` with the following content (or similar, accordingly to your framework):
    ```html
    <div>
      Count ${count}<br>
      Increment ${increment}<br>
      <button>
        Current ${icount}
      </button>
    </div>
    ```
  * the `count` value is a number that starts from `0` and should increment `+ 1` per each `<button>` click. Every update needs to be reflected 1:1 as global `window.count` variable. Initially, such global value is already `0`, but such value should be available at the component level too.
  * `increment` value is the result, performed only once, of the following `1 + Math.floor(Math.random() * 5)` expression. Each update should keep the initial value and this variable should never leak to the global scope.
  * `icount` is the resulting value of the expression `increment + count`. It is updated per each button click so that visually, the result, should always be `count`, `increment`, `count * increment`, yet stored as separate, non global, property/state/field.

You can see a basic example within the [vanilla](./vanilla/) folder, or a more complex one within the [react-component](./react-component/) one.

In case of build steps, be sure the result can be fully loaded locally without needing to be on the root of the folder.

Once you have a usable test that works, after invoking in console a `setup()`, add a `<div id="package-name"></div>` to the main [index.html](./index.html) file.

Running `npm run build` should automatically setup all the tests that need it, while running `npm i` should setup all sub folders that need it and then, in both cases, execute `npm run bench`.

Follow up local IPs to test locally, or use [the live page](https://webreflection.github.io/clickblaster/), eventually adding `?100` or `?9000` to change stress level and verify how all frameworks respond.

### How to read results

The result is about **loading** time, followed by **setup** time, and **benchmark** time, all in **milliseconds**.

AS any micro benchmark, take this with a pinch of salt, but your PRs are welcome anyway.
