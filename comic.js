let stateSub1 = 0
function deactivateSubScene(el) {
    setTimeout(()=>{statSub1 = (stateSub1+1)%2; el.style.opacity = stateSub1; console.log(stateSub1)}, 2000)
}
scene1.addEventListener("webkitTransitionEnd", deactivateSubScene(subScene1));