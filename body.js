befHistory.style.background = "#ffecd4"
befSukhothai.style.background = "#C0E9F7"
sukhothai.style.background = "#ffefd1"
thonburi.style.background = "#9e94b5"

function hideLoader(){
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