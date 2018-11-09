function setup() {
  let count = 0;
  let icount = 0;
  const increment = 1 + Math.floor(Math.random() * 5);
  document.body.innerHTML = [
    '<div>',
      'Count <!--count--><br>',
      'Increment <!--increment--><br>',
      '<button>',
        'Current <!--icount-->',
      '</button>',
    '</div>'
  ].join('');

  const div = document.body.childNodes[0];
  const button = div.childNodes[6];
  const $count = div.childNodes[1];
  const $increment = div.childNodes[4];
  const $icount = button.childNodes[1];

  const countNode = document.createTextNode(count);
  const incrementNode = document.createTextNode(increment);
  const icountNode = document.createTextNode(icount);
  $count.parentNode.replaceChild(countNode, $count);
  $increment.parentNode.replaceChild(incrementNode, $increment);
  $icount.parentNode.replaceChild(icountNode, $icount);

  button.addEventListener('click', () => {
    count++;
    icount += increment;
    countNode.textContent = count;
    icountNode.textContent = icount;
    window.count = count;
  });

}
