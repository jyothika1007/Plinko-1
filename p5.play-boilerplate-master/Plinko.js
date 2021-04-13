class Plinkos{
    constructor(x,y){

        var options ={
            isStatic:true
        }
        
        this.r=10;
    this.x=x;
    this.y=y;
        this.body=Bodies.circle(x,y,this.r,options);
       
        World.add(world,this.body);

    }
    display(){
         var pos = this.body.position;
         var angle=this.body.angle;

         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill(255);
         ellipseMode(RADIUS);
         ellipse(0,0,this.r,this.r);
         pop();
    }  
};
