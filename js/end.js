function getCoin(el){
    let coins = document.querySelectorAll(`[data-coin=${ el.dataset.coin }]`)
    coins.forEach((coin)=>{
        if(coin.classList.contains("collect")){
            coin.dataset.found = true
        }
        if(coin.dataset.collectable){
            coin.classList.add("active")
        }
    })
    let collectedCoin = document.querySelectorAll(`[data-found='true'`)
    console.log(collectedCoin.length)
    if(collectedCoin.length == 4){
        end.foundAll = true
    }
    document.querySelector('.coinBox').dataset.active = 'true'
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