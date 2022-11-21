function activate(el){
  el.classList.add("active")
  if(el.parentElement.classList.contains("box")){
    el.parentElement.classList.add("active")
  }
}
function deactivate(el){
  var parent = el.parentElement
  var childe =  parent.querySelectorAll("[data-delay]")
  el.classList.remove("active")
  if(parent.classList.contains("box")){
    parent.classList.remove("active")
    childe.forEach(childeEl =>{
      childeEl.classList.remove("active")
    })
  }
}

function AOS(){
    var items = document.querySelectorAll("[data-aos='fade-up'], [data-aos='spin-out']")
    items.forEach((item)=>{
      var windowHeight = window.innerHeight;
      var curTop = item.getBoundingClientRect().top;
      var checkpoint = windowHeight * 20 / 100;
      var parent = item.parentElement
      var childe =  parent.querySelectorAll("[data-delay]")
      if (curTop < windowHeight - checkpoint) {
        activate(item)
        item.addEventListener('transitionend', ()=>{
          if(parent.classList.contains("box")){
            childe.forEach((el)=>{
              var timer;
              clearTimeout(timer)
              timer = setTimeout(()=>{
                el.classList.add("active")
              }, el.dataset.delay)
            })
          }
        })
      }
      else {
        deactivate(item)
      }
    })
}

window.addEventListener("scroll", ()=>{
    AOS()
})