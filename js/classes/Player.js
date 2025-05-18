class Player {
  constructor({ position, collisionBlocks }) {
    this.position = position 
    this.velocity = {
      x: 0,
      y: 1
    }
    this.width = 100
    this.height = 100
    this.collisionBlocks = collisionBlocks
  }
  draw() {
    ctx.fillStyle = '#ff4500'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
  update() {
    this.draw()
    this.position.x += this.velocity.x   
    this.position.y += this.velocity.y   
    this.velocity.y += gravity  
  }
}