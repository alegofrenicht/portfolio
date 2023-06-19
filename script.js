var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
}


var side_menu = document.getElementById('side_menu')

function openmenu(){
    side_menu.style.right = '0';
}

function closemenu(){
    side_menu.style.right = '-20vh';
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwAyoHfHVNspmAchPYUVuFzkuQtADOMoh-KhKPg7fVFE1HGtbozg5YDOA8Is5zsxznSEg/exec'
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.style.color = 'forestgreen'
          setTimeout(function (){
              msg.style.color = 'black'
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })