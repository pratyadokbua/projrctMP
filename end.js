function getCoin(el){
    let coins = document.querySelectorAll(`[data-coin=${ el.dataset.coin }]`)
    coins.forEach((coin)=>{
        coin.dataset.found = true
        if(coin.dataset.collectable){
            coin.style.display = "none"
        }
    })
    let collectedCoin = document.querySelectorAll(`.coin[data-found='true'`)
    console.log(collectedCoin.length)
    if(collectedCoin.length == 4){
        end.foundAll = true
    }
    document.querySelector('.coinBox').dataset.active = 'true'
}
function closeCoinBox(el){
    el.dataset.active = 'false'
}
let end = new Vue({
    el: "#end",
    data: {
        foundAll: false
    }
})