
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1
var paper,paperObject
var db1

function preload()
{
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
    ground1= new Ground(400,650,800,20)
    db1= new DB (650,550,175,150)
    paper= new Paper(100,200,70)
    
    
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  
  paper.display();
  db1.display();
 ground1.display();
 

}



function keyPressed(){
  if(keyDown("up")){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});

  }

}





