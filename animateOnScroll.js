function activate(el){
  el.classList.add("active")
}
function deactivate(el){
  el.classList.remove("active")
}
function AOS(){
    var items = document.querySelectorAll("[data-aos='fade-up']")
    items.forEach((item)=>{
      var windowHeight = window.innerHeight;
      var curTop = item.getBoundingClientRect().top;
      var checkpoint = 150;
      if (curTop < windowHeight - checkpoint) {
        activate(item.parentElement)
        activate(item)
      }
      else {
        deactivate(item.parentElement)
        deactivate(item)
      }
    })
}

function sceneLookUp(key, params, time){
  var elGrp = document.querySelectorAll(key);
  elGrp.forEach((el)=>{
    if(el.parentElement.classList.contains("active")){
      setTimeout(()=>{
        if(el.parentElement.classList.contains("active")){
          el.classList.add(params)
        }else{
          el.classList.remove(params)
        }
      }, time)
    }
    else{
      el.classList.remove(params)
    }
  })
}

function animationLookUp(time){
  var elGrp = document.querySelectorAll("[data-animation]");
  elGrp.forEach((el)=>{
    if(el.parentElement.classList.contains("active")){
      setTimeout(()=>{
        if(el.parentElement.classList.contains("active")){
          el.classList.add(el.dataset.animation)
        }else{
          el.classList.remove(el.dataset.animation)
        }
      }, time)
    }
    else{
      el.classList.remove(el.dataset.animation)
    }
  })
}

window.addEventListener("scroll", ()=>{
    AOS()
    sceneLookUp("[data-type='sub-scene']", "active", 1500)
    sceneLookUp("[data-type='props']", "active", 2000)
    animationLookUp(500)

})