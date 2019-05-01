document.onmousemove = function (event) {
  let wrap = document.querySelector('.wrapper');
  let eye1 = document.querySelector('.e-1');
  let eye2 = document.querySelector('.e-3');
  
  let eye1Width = wrap.offsetLeft + eye1.offsetWidth -53;
  let eye1height = wrap.offsetTop + eye1.offsetHeight -53;
  
  let x = event.x - eye1Width;
  let y = event.y - eye1height;
  
  eye1.style.cssText = 'transform: rotate('+ 57.2958 * arcctg(x,y) + 'deg);';
  eye2.style.cssText = 'transform: rotate('+ 57.2958 * arcctg(x - 116,y) + 'deg);';
  
  function arcctg(x,y) {
    if(x > 0 && y > 0) { return Math.PI/2 - Math.atan(x/y) };
    if(x < 0 && y > 0) { return Math.PI/2 - Math.atan(x/y) };
    if(x < 0 && y < 0) { return Math.PI + Math.atan(y/x) };
    if(x > 0 && y < 0) { return 3*Math.PI/2 + Math.abs(Math.atan(x/y)) };
  }
}