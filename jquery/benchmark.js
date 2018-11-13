function setup() {
  let count = 0;
  let icount = 0;
  const increment = 1 + Math.floor(Math.random() * 5);
  const body = $('body');
  body.html([
    '<div>',
      'Count <!--count--><br>',
      'Increment <!--increment--><br>',
      '<button>',
        'Current <!--icount-->',
      '</button>',
    '</div>'
  ].join(''));

  const div = $('div', body).get(0);
  const button = $('button', div);
  $(div.childNodes[4]).replaceWith(increment);
  setCount(count);
  setICount(icount);

  button.click(() => {
    count += 1;
    icount += increment;
    setCount(count);
    setICount(icount);
    window.count = count;
    button.attr('clicks', count);
  });

  function setCount(count) {
    $(div.childNodes[1]).replaceWith(count);
  }
  function setICount(icount) {
    $(button.get(0).childNodes[1]).replaceWith(icount);
  }
}
