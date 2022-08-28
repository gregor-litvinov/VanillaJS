window.onload = function () {

  let sdvig = 0;
  let timer;

  let test = document.getElementById('test')
  // move()

  function move() {
    test.style.marginLeft = sdvig + 'px'
    sdvig = sdvig + 10;
    timer = setTimeout(move, 50)
  }

  // let timer = setInterval(move, 50)

  document.getElementById('stop').onclick = function() {
    // clearInterval(timer)
    clearTimeout(timer)
  }
  let a = 10
  ort()
  function ort() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a < 0) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(ort, 1000)
    }
  }
  // setTimeout(move, 5000)
}
