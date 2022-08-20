window.onload = function () {

  document.querySelector('#menu').onmouseover = menuShou;
  document.querySelector('#menu').onmouseout = menuHide;

  document.onkeydown  = function(event) {
    console.log(event)
    if(event.code == 'KeyM') menuShou();
      if(event.code == 'Escape') menuHide();
  }

function menuShou() {
  document.querySelector('#menu').style.left = 0
}

function menuHide() {
  document.querySelector('#menu').style.left = '-220px';
}

}