const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		 roof = new Roof(300,150,300,100);
		
	//	bob1 = new Bob(200,150,5);
		bob3 = new Bob(200,160,5);
		bob4 = new Bob(200,170,5);
		bob5 = new Bob(200,180,5);
		bob2 = new Bob(200,190,5);
		//rope1= new Rope(bob1.body,roof.body);
		rope2= new Rope(bob2.body,roof.body);
		rope3= new Rope(bob3.body,roof.body);
		rope4= new Rope(bob4.body,roof.body);
		rope5= new Rope(bob5.body,roof.body);
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();

  roof.display();

  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // bob1.display();

 // rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  line(375,140,375,250);
  line(50,150,175,150);
  line(200,160,200,250);
  line(400,140,475,140);
  line();
}

function mouseDragged(){
	Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});

}




