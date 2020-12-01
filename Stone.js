class Stone{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:1,
            density:1.2,
            isStatic:false

        }
        this.body=Matter.Bodies.circle(x,y,10,options);
        this.radius=10;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        this.image=loadImage("stone.png");

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        

        imageMode(CENTER);
        image(this.image,0,0,20,20);
        pop();

       
    }
}