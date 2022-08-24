window.onload = function () {

  document.querySelector('.tabs-header').addEventListener('click', fTabs)

    function fTabs(event) {
      // console.log(event)
      // console.log(event.target.getAttribute('data-tab'))
      // console.log(event.target.className == 'tab-h')
      if (event.target.className == 'tabs-h') {
        let dataTab = event.target.getAttribute('data-tab')
        let tabBody = document.getElementsByClassName('tab-b')
        for (let i = 0; i < tabBody.length; i++) {
          if (dataTab == i) {
            tabBody[i].style.display = 'block'
          } else {
             tabBody[i].style.display = 'none'
          }
        }
        // console.log(dataTab)
      }

    }
}