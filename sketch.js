const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var fairy1, fairy2, star, Canvas, bg;

function preload()
{
   //preload the images here
   bg = loadImage("starnight.png");
   fairy= loadAnimation("fairy.png"), fairy1=loadAnimation("fairy1.png"), fairy2= loadAnimation("fairy2.png"), star= loadAnimation("star.png"), joySound= loadSound("joyMusic.mp3");
  
}

function setup() {
  createCanvas(400, 400); 
  engine=Engine.create();
  world=engine.world;
  var star_options={
    restitution:1.0 
   }
   var fairy_options={
     isStatic:false 
   }
   star.x= starBody.position.x
   star.y= starBody.position.y

   fairy = createSprite(200,200,50,50);
   fairy.addImage("fairy", fairyImg);

   fairy1 = createSprite(200,200,20,20);
   fairy1.addImage("fairy1", fairy1Img);

   fairy2 = createSprite(200,200,10,10);
   fairy2.addImage("fairy2, fairy2Iimg");            
  
   
   

}

function draw() {
  background(0);

  function keyPressed(){
  }
    if(keyCode === LEFT_ARROW){
       fairy.velocityX = -5;
    }

    if(keyCode === RIGHT_ARROW){
       fairy.velocityY = 5;
}
if(keyDown("left_arrow")){
  fairy.x = fairy.x - 3;
}

if(keyDown("right_arrow")){
  fairy.y = fairy.y + 3;
}


}
  //drawSprites();

