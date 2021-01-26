class sand{
    constructor(x,y,rect){
    var options = {
    "restitution":0.3,
    "friction":5,
    "density":1
    }
    this.x=x;
    this.y=y;
    this.r=r
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
    
    world.add(world,this.body);
    }
    display(){
    var sandpos = this.body.position;
    Push();
    translate(sandpos.x,sandpos.y);
    rectMode(CENTER);
    strokeweight(4);
    stroke("black");
    fill("red");
    ellipse(0,0,this.r,this.r);
    Pop()
    }
    }