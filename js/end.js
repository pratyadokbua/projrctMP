function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=(e.clientY - 64)+"px";
    d.style.left=(e.clientX - 64)+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.querySelectorAll(`[data-collectAble]`).forEach((el)=>{
    el.addEventListener('click',clickEffect);
})
function genEff(x, y){
    
}

function getCoin(el){
    let coins = document.querySelectorAll(`[data-coin=${ el.dataset.coin }]`)
    coins.forEach((coin)=>{
        if(coin.classList.contains("collect")){
            coin.dataset.found = true
        }
    })
    el.classList.add("collected")
    el.addEventListener('animationend', ()=>{
        el.style.display = "none"
    })
    setTimeout(()=>{
        let collectedCoin = document.querySelectorAll(`[data-found='true'`)
        console.log(collectedCoin.length)
        if(collectedCoin.length == 4){
            end.foundAll = true
        }
        document.querySelector('.coinBox').dataset.active = 'true'
    }, 1000)
    
}


function closeCoinBox(el){
    el.dataset.active = 'false'
}
let emdVue = new Vue({
    el: "#end",
    data: {
        foundAll: false
    }
})