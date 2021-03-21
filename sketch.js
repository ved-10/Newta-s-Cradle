
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Ball(240,400,30)
	bobObject2 = new Ball(300,400,30)
	bobObject3 = new Ball(360,400,30)
	bobObject4 = new Ball(420,400,30)
	bobObject5 = new Ball(480,400,30)
	roof1 = new Roof(360,100,850,30)
	rope1 = new Rope(bobObject1.body,roof1.body,-120,0)
	rope2 = new Rope(bobObject2.body,roof1.body,-60,0)
	rope3 = new Rope(bobObject3.body,roof1.body,0,0)
	rope4 = new Rope(bobObject4.body,roof1.body,60,0)
	rope5 = new Rope(bobObject5.body,roof1.body,120,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:-15});
  }
 
  if(keyCode === RIGHT_ARROW){
    Body.applyForce(bobObject5.body,bobObject5.body.position,{x:+500,y:+15});
  }
}




