class rubber{
    constructor(x,y,r){
    var options = {
    "restitution":0.3,
    "friction":5,
    "density":1
    }
    this.x=x;
    this.y=y;
    this.r=r
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    this.width = width;
    this.height = height;
    
    world.add(world,this.body);
    }
    display(){
    var rubber = this.body.position;
    Push()
    translate(rubberpos.x,rubberpos.y);
    rectMode(CENTER);
    strokeweight(4);
    stroke("black");
    fill("darkblue");
    ellipse(0,0,this.r,this.r);
    Pop()
    }
    }