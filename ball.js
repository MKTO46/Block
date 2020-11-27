class Ball{
    constructor(x,y,radius){
    var option = {
        restitution:0.3
    }
    this.body = Bodies.circle(x,y,radius,option)
    this.radius = radius
    World.add(world,this.body)
    }
display(){
    ellipseMode(RADIUS)
    fill('red')
    ellipse(this.body.position.x,this.body.position.y,this.radius)
}
}