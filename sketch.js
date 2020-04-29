var fixedRect, movingRect;

function setup() {
  createCanvas(1400,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);   
  
  bounceoff(movingRect,fixedRect);
  
  drawSprites();
}
