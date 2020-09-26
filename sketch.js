const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(1050,370,70,70);
    box2=new Box(880,370,70,70);
    box3=new Box(1050,270,70,70);
    box4=new Box(880,270,70,70);
    box5=new Box(965,200,70,70)
    ground=new Ground(600,390,1200,40);
    pig1=new Pig(965,370)
    pig2=new Pig(965,270)
    log1=new Log(965,320,240,PI/2)
    log2=new Log(965,220,240,PI/2)
    log3=new Log(900,170,140,PI/4)
    log4=new Log(1030,170,140,-PI/4)
    bird=new Bird(100,200)
}

function draw(){
    background(2,5,5);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}

