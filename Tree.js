class Tree{
    constructor(x,y){
        var options={
            isStatic:true
    
        }
        this.body=Bodies.rectangle(x,y,300,300,options);
        this.width=300;
        this.height=300;
        World.add(world,this.body);
        this.treeImage=loadImage("tree.png");

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);

        image(this.treeImage,0,0,300,300);
        pop();

    }
}
