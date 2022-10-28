class Sprite {
    imgPath
    image
    scale = 1
    posX = 0
    posY = 0
    stepLenghtX = -85
    stepLenghtY = -110
    col = 4
    row = 2
    final_col = 2
    state = false
    constructor(imgPath){
        this.imgPath = imgPath
    }
    setStepLenght(x, y){
        this.stepLenghtX = x
        this.stepLenghtY = y
    }
    setStepLenghtX(x){
        this.stepLenghtX = x
    }
    setStepLenghtY(y){
        this.stepLenghtX = y
    }
    createImage(){
        this.image = new Image()
        this.image.src = this.imgPath;
        this.image.height = this.height*this.scale
        this.image.height = this.width*this.scale
    }
    append(el){
        // el.append(this.image)
        ctx.drawImage(this.image, this.posX, this.posY)
    }
    move(){
        this.state = true
        let move = setInterval(()=>{
            sprite.next()
            if(!this.state){
                clearInterval(move)
            }
        }, 100)
        
    }
    stop(){
        this.state = false
    }
    next(){
        this.posX += 1
        if((this.posX == this.col-1)){
            this.posX = 0
            this.posY += 1
        }
        else if(this.posX == this.final_col-1 && this.posY == this.row-1){
            this.posX = 0
            this.posY = 0
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, this.posX*this.stepLenghtX, this.posY*this.stepLenghtY)

    }
    sayHi(){
        console.log("hi")
    }
}