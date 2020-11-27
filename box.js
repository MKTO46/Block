class Box{
    constructor(x,y){
    var option = {
        restitution:0.8,
        friction:0.8
    }
    this.body = Bodies.rectangle(x,y,70,70,option)
    this.width = 70
    this.height = 70
    World.add(world,this.body)
    }
display(){
    push()
    translate(this.body.position.x,this.body.position.y)    
    rotate(this.body.angle)
    rectMode(CENTER)
    fill('white')
    rect(0,0,this.width,this.height)
    pop()
}
}