const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

boxes = [];
drops = [];
drops2 = [];
drops3 = [];
drops4 = [];

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;
}

function draw() {
  background(50);
  Engine.update(engine);

  boxes.push(new Box(random(10,790),10,1,10));
  drops.push(new Box(random(10,790),10,1,30));
  drops2.push(new Box(random(10,790),10,1,35));
  drops3.push(new Box(random(10,790),10,1,22));
  drops4.push(new Box(random(10,790),10,1,15));

  for(var i = 0; i < boxes.length; i ++){
    boxes[i].show();
}

for(var i = 0; i < drops.length; i ++){
  drops[i].show();
}

for(var i = 0; i < drops2.length; i ++){
  drops2[i].show();
}

for(var i = 0; i < drops3.length; i ++){
  drops3[i].show();
}

for(var i = 0; i < drops4.length; i ++){
  drops4[i].show();
}

  drawSprites();
}