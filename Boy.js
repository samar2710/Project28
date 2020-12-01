class Boy{
    constructor(x,y){
        var options={
            isStatic:true,

        }
        this.body=Bodies.rectangle(x,y,100,120,options);
        this.width=100;
        this.height=120;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        this.boyImg=loadImage("boy.png");

        
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        image(this.boyImg,0,0,100,120);

    }
}