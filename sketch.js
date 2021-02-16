const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,platform1,platform2

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(200, 100, 150, 180);
    platform2 = new Ground(250, 160, 100, 150);
} 

function draw(){
    background(255);
    Engine.update(engine);  
    
    ground.display();
    platform1.display();
    platform2.display();  
 
}  