window.onload = function () {
let number = Math.floor(10*Math.random()) + 1;
console.log(number)
let count = 2;

document.getElementById('check').onclick = function() {

if (count > 0) {
  let userNam = document.getElementById('mynum').value;
  console.log(userNam)
  userNam = parseInt(userNam)

  let out = document.getElementById('out')

    if (userNam == number) {
    out.innerHTML = 'winner!'
    }
    else if (userNam > number) {
    out.innerHTML = 'cold!'
    }
    else if (userNam < number) {
    out.innerHTML = 'hot!'
    }
    document.getElementById('count').innerHTML = 'Attention! you can try eat' + count;
     count = count - 1;
  }
else {
      alert('you lost')
      window.location.reload()
}
}
}