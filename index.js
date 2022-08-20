window.onload = function () {

let todoList = []
  if(localStorage.getItem('todo') != undefined) {
  todoList = JSON.parse(localStorage.getItem('todo'))
  out()
  }

  document.getElementById('add').onclick = function() {
    let val = document.getElementById('in').value
    let temp = {}
    temp.todo = val
    temp.check = false
    let i = todoList.length
    todoList[i] = temp
    console.log(todoList)
    out()
    localStorage.setItem('todo', JSON.stringify(todoList))
  }
   function out () {
      let out = '';
    //   for (let key in todoList) {
    //     if(todoList[key].check == true) {
    //       out += '<input type="checkbox" checked/>'
    //   } else {
    //      out += '<input type="checkbox" />'
    //   }
    // }
      for (let key in todoList) {
        console.log(todoList[key])
        out += todoList[key].todo + '<br>'
      }
    document.getElementById('out').innerHTML = out

   }
}