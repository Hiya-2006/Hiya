
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine, world
var ground1, tree1, stone1, boy1, mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new ground(780,680, 1800, 20)

	tree1=new tree(600, 300)

	//stone1=new stone()

	boy1=new boy(100,600,0,10)
	
	stone1=new stone(100,600,0,10)

	mango1=new mango(600, 300, 50,50)
	mango2=new mango(710, 390, 50,50)
	mango3=new mango(660, 330, 50,50)
	mango4=new mango(580, 250, 50,50)
	mango5=new mango(560, 400, 50,50)
	mango6=new mango(500, 380, 50,50)
	mango7=new mango(690, 280, 50,50)
	//Create the Bodies Here.
	sling1=new sling(stone1.body, {x:200,y:600})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground1.display()
  boy1.display()
 
  tree1.display()
  stone1.display()
  mango1.display() 
  mango2.display() 
  mango3.display() 
  mango4.display() 
  mango5.display() 
  mango6.display() 
  mango7.display() 

  sling1.display()
  
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {
    sling1.fly();
}


