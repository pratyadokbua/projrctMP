class Sprite {
    imgPath
    image
    scale = 1
    posX = 0
    posY = 0
    stepLenghtX = -85
    stepLenghtY = -110
    col = 3
    row = 3
    final_col = 3
    state = false
    constructor(imgPath){
        this.imgPath = imgPath
    }
    setPos(x, y){
        this.posX = x
        this.posY = y
    }
    setPosX(x){
        this.posX = x
    }
    setPosY(y){
        this.posY = y
    }
    setStepLenght(x, y){
        this.stepLenghtX = x
        this.stepLenghtY = y
    }
    setCtx(ctx){
        this.ctx = ctx
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
    append(){
        // el.append(this.image)
        ctx.drawImage(this.image, this.posX, this.posY)
    }
    move(){
        this.state = true
        let move = setInterval(()=>{
            this.next()
            if(!this.state){
                clearInterval(move)
            }
        }, 1000)
        
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