class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        
        this.body=Matter.Bodies.circle(x,y,10,options);
        this.radius=10;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        this.image=loadImage("mango.png");

    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,this.x,this.y,20,20);

       
    }
}