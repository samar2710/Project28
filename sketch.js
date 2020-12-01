
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var mango1;
var stone;
var ground;
var boy;

function preload()
{
	boyImg=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(410,400);

	stone=new Stone(220,200);
	

	ground=new Ground(400,650,800,20);

	tree=new Tree(500,500);

	boy=new Boy(250,615);

	chain=new Chain(stone.body,boy.body.position);
	mango2=new Mango(400,450);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  mango1.display();

  stone.display();

  ground.display();
  tree.display();
  mango1.display();
mango2.display();
  boy.display();

  chain.display();
  
  
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	chain.fly();
}


