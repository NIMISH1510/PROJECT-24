class hammer{
    constructor(x,y){
    var options = {
    "restitution":2,
    "friction":1.0,
    "density":0.5
    };
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 150;
    this.height = 40;
    
    world.add(world,this.body);
    };
    display(){
    var pos = this.body.position;
    pos.x = mouse.x;
    pos.y = mouse.y;
    var angle = this.body.angle;
    Push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeweight(3);
    stroke("white");
    fill("orange");
    rect(0,0,this.width,this.height);
    rect(0,0,this.width,this.height);
    Pop();
    }
    }