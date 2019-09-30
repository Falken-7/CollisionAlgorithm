var m,f;

function setup() {
  createCanvas(1200,800);
 m =  createSprite(400, 200, 50, 50);
 m.debug = true;
 f =  createSprite(600, 400, 70, 20);
 f.debug = true;
}

function draw() {
  background("black");  
  m.x = World.mouseX;
  m.y = World.mouseY;
  if(m.x - f.x < f.width/2 + m.width/2 && m.y - f.y < f.width/2 + m.width/2 && f.x - m.x < f.width/2 + m.width/2 && f.y - m.y < f.width/2 + m.width/2){
    m.shapeColor = "red";
    f.shapeColor = "red";
    f.velocityX = 2;
    f.velocityY = 2;
  }
  else {
    m.shapeColor = "green";
    f.shapeColor = "green";
    f.velocityX = 0;
    f.velocityY = 0;
  }
  drawSprites();
}