window.onload = function () {

  let sdvig = 0;

  let test = document.getElementById('test')
  move()

  function move() {
    test.style.marginLeft = sdvig + 'px'
    sdvig = sdvig + 10;
    setTimeout(move, 50)
  }

  // let timer = setInterval(move, 50)

  document.getElementById('stop').onclick = function() {
    // clearInterval(timer)
  }
  // setTimeout(move, 5000)
}
