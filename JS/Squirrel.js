class Squirrel {
  
  constructor(col,row,direction) {
    this.col = col
    this.row = row
    this.direction = direction

    this.imgs = {
      right: new Image(),
      left: new Image(),
      down: new Image(),
      up: new Image(),
    }
    this.imgs.right.src = '../Assets/IMG/Squirrel.png'
    this.imgs.left.src = '../Assets/IMG/Squirrel.png'
    this.imgs.down.src = '../Assets/IMG/Squirrel.png'
    this.imgs.up.src = '../Assets/IMG/Squirrel.png'

    this.nbOfFramesBeforeMoving = 15
  }
  moveUp(){
    this.direction = "up"
  }
  moveRight(){
    this.direction = "right"
  }
  moveDown(){
    this.direction = "down"
  }
  moveLeft(){
    this.direction = "left"
  }
  draw(ctx) {
    let size = 100
    ctx.drawImage(this.imgs[this.direction], squirrel.col*100+(100-size)/2, squirrel.row*100+(100-size)/2,size,size)
  }
  update() {
    this.nbOfFramesBeforeMoving--
    if (this.nbOfFramesBeforeMoving === 0) {
      this.nbOfFramesBeforeMoving = 15
      switch (this.direction) {
        case "right":
        if (this.col < 9){
          this.col++
          }
          break
        case "left":
        if(this.col > 0){
          this.col--
          }
          break
        case "down":
        if(this.row < 9){
          this.row++
          } 
          break
        case "up":
        if(this.row > 0){
          this.row--
          }
          break
      }
    }
  }
}