const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,box1;
 

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(150, 305, 300, 170);
    box1 = new box(150,290,20,20)
    box2 = new box(160,290,20,20)
    box3 = new box(170,290,20,20)
    box4 = new box(180,290,20,20)





   
   

   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    platform.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    

    
   
}

