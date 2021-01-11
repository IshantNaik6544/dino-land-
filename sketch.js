var carlo,carloimage;
var andy,andyimage;
var mountain,mountainimage;
var bg,bgimage;

function preload(){
 carloimage=loadAnimation("carlo.gif")   
 bgimage=loadImage("background2.jpg")                 
 
}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200)
  bg.addImage(bgimage)
  bg.scale
carlo=createSprite(150,270)
carlo.scale=0.40
carlo.addAnimation("running",carloimage)



}





function draw() {
  
  background(0);
  
  drawSprites(); 
  fill ("white")
 text(mouseX+","+mouseY,mouseX,mouseY)
 if(keyDown("space") && carlo.y >= 159) {
  carlo.velocityY = -12;
  carlo.velocityY = carlo.velocityY + 0.8
}
}