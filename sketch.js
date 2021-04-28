const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 

var object;


function setup() {
  var canvas = createCanvas(800,400);
 

  engine = Engine.create();
  world = engine.world;
 ground = new Ground(600,height,800,20);

  block1 = new Box(700,320,70,70) ;
  block2 = new Box(920,320,70,70);
  block3 = new Box(300,200,70,70);
  block4  = new Box(400,200,80,80);
  block5  = new Pig(900,350) ;
  block6  = new Log (810,260,300,PI/2)
}

function draw() {
  background(0);  
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
ground.display();

  drawSprites();
}