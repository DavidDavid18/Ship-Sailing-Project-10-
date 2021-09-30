var sea,seaImage,shipImage,ship
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImage)
  sea.scale = 0.3
  sea.velocityX = -3

  ship = createSprite(200,200,50,50);
  ship.addAnimation("shipsailing",shipImage);
  ship.scale = 0.2
}

function draw() {
  background("blue");
  if(sea.x <0){
  sea.x = 200  
  }
  
 drawSprites()
}