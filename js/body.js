befHistory.style.background = "#ffecd4"
befSukhothai.style.background = "#C0E9F7"
sukhothai.style.background = "#ffefd1"
thonburi.style.background = "#9e94b5"

function hideLoader(){
    window.scrollTo(0 ,0);
    document.querySelector('.loading').style.display = "none";
}

let resizeTime;

window.addEventListener("resize", ()=>{
    document.body.classList.add("stop-transiton");
    clearTimeout(resizeTime);
    resizeTime = setTimeout(()=>{
        document.body.classList.remove("stop-transition")
    }, 500)
})

var crys = document.querySelectorAll(".cry")
var cryIndex = 0;
var cry = crys[cryIndex];
doCry = setInterval(()=>{
    try{
        if(cryingFrunk.classList.contains("active")){
        cry.classList.remove("active")
        cryIndex = (cryIndex + 1) % 4
        cry = crys[cryIndex]
        cry.classList.add("active")
        }
        else{
            cry.classList.remove("active")
        }
    }
    catch(e){
        clearInterval(doCry)
    }
}, 1000)

