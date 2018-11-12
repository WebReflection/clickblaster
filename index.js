let now;
if (this.performance)
  now = performance.now.bind(performance);
else
  now = Date.now.bind(Date);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const stress = Math.min(9000, Math.max(1, parseInt(location.search.slice(1), 10) || 1000));
    const packages = [];
    const divs = document.querySelectorAll('body > div');
    for (let i = 0; i < divs.length; i++)
      packages[i] = divs[i].id;
    const benchmarks = {};
    setTimeout(function bench() {
      if (packages.length) {
        window.loaded = () => {
          timers.load = Math.round(now() - time);
          let clicked = false;
          const frame = div.lastChild.contentWindow;
          frame.count = 0;
          const benchmark = () => {
            const {count} = frame;
            if (clicked && count < 1) {
              console.error(package, timers);
              div.firstChild.appendChild(document.createElement('small')).textContent = '[error]';
              bench();
              return;
            }
            if (count < stress) {
              clicked = true;
              const {textContent} = button;
              button.click();
              if (button.textContent === textContent)
                window.benchmark = benchmark;
              else
                benchmark();
            }
            else {
              timers.benchmark = Math.round(now() - time);
              console.log(package, timers);
              div.firstChild.appendChild(document.createElement('small')).textContent = '[' + [
                timers.load,
                timers.setup,
                timers.benchmark
              ].join(', ') + ']';
              setTimeout(bench, 250);
            }
          };
          time = now();
          frame.setup();
          const button = frame.document.querySelector('button');
          timers.setup = Math.round(now() - time);
          time = now();
          benchmark();
        };
        const package = packages.shift();
        const div = document.getElementById(package);
        const timers = (benchmarks[package] = {});
        let time = now();
        div.innerHTML =
          '<h3>' + package.split('/')[0] + '</h3>' +
          '<iframe frameborder="0" src="' + package + '/index.html" onload="loaded()"></iframe>';
      } else {
        console.log(benchmarks);
        const keys = Object.keys(benchmarks);
        const sub = Object.keys(benchmarks[keys[0]]);
        const ctx = document.querySelector('canvas').getContext('2d');
        new Chart(ctx, {
          type: 'horizontalBar',
          data: {
            labels: keys.map(key => key.split('/')[0].split('-').join(' ')),
            datasets: [{
              label: sub[0],
              backgroundColor: '#eee3e7',
              data: keys.map(key => benchmarks[key][sub[0]])
            }, {
              label: sub[1],
              backgroundColor: '#eec9d2',
              data: keys.map(key => benchmarks[key][sub[1]])
            }, {
              label: sub[2],
              backgroundColor: '#f6abb6',
              data: keys.map(key => benchmarks[key][sub[2]])
            }]
          },
          options: {}
        });
      }
    }, 750);
  },
  {once: true}
);