function setup() {
  let count = 0;
  let icount = 0;
  const increment = 1 + Math.floor(Math.random() * 5);
  const render = hyperHTML.bind(document.body);
  const setCount = () => {
    count++;
    icount += increment;
    window.count = count;
    update();
  }
  const update = () => {
    render`
    <div>
      Count ${count}<br>
      Increment ${increment}<br>
      <button onclick=${setCount} clicks=${count}>
        Current ${icount}
      </button>
    </div>`;
  }
  update();
}
