var fixedRect, movingRect;
var go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go2 = createSprite(400, 100, 50, 50);
  go2.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect, go2);
  
  drawSprites();

}

