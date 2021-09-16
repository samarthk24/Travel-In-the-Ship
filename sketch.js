var ship, sea;

function preload(){

  ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(1250,500);
  //create sea background
  sea = createSprite(200, 200);
  sea.addImage("image", sea_image);
  sea.scale = 0.75;
  sea.velocityX = -2;

  //create ship object
  ship = createSprite(600, 280);
  ship.addAnimation("sailing", ship_sailing);
  ship.scale = 0.5;

}

function draw() {
  background("blue");
  
  if(sea.x < 0){
    sea.x = 200;
  }

  if(keyDown("up") && ship.scale>0.2){
    ship.scale -= 0.05;
  }

  if(keyDown("down") && ship.scale<0.7){
    ship.scale += 0.05;
  }

  if(keyDown("left") && sea.velocityX<-0.5){
    sea.velocityX += 0.1;
  }

  if(keyDown("right") && sea.velocityX>-5){
    sea.velocityX -= 0.1;
  }

  drawSprites();
}