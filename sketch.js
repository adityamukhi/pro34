const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;






function setup() {
  createCanvas(300,800);
  engine = Engine.create();
    world = engine.world;
 ground= new Ground(600,600,1200,20)
 
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  ground.display() 
  drawSprites();
}

