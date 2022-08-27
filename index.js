window.onload = function () {

  let block = document.getElementById('one')

  // block.onclick = function() {
  //   this.style.background = 'green'
  //   this.onclick = null
  // }
  // block.ondblclick = function() {
  //   this.style.background = 'red'
  // }
    block.oncontextmenu = function() {
    this.style.background = 'black'
    return false
  }
  // block.onmouseenter = function() {
  //   console.log('...in!')
  //   this.style.background = 'gold'
  // }
  // block.onmouseleave = function() {
  //   this.style.background = 'blue'
  // }
    //   let a = 0;
    //   block.onmousemove = function() {
    //   a++
    //   this.style.width = 100 + a +'px'
    // }
    block.onmousedown = function(event) {
      this.style.background = 'cyan'
      console.log(event.button)

    }
}
