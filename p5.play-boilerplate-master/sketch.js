var gameState=PLAY;
var bg,astronaut,astronautImg,comet1,cometImg1, comet2,cometImg2,potion,potionImg,mainRocket,mainRocketImg;
var potionS,GameS;

function preload(){
  bg=loadImage("Background.gif");
  astronautImg=loadImage("Astronaut.png");
  cometImg1=loadImage("01.png");
  cometImg2=loadImage("02.png");
  potionImg=loadImage("Potion.png");
  mainRocketImg=loadImage("MainRocket.png");
 

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addImage(astronautImg);
  astronaut.scale=0.08;

  comet1=createSprite(500,600,60,60);
  comet1.addImage(cometImg1);
  comet1.scale=2;

  comet2=createSprite(500,600,60,60);
  comet2.addImage(cometImg2);
  comet2.scale=2;

  potion=createSprite(200,600,60,60);
  potion.addImage(potionImg);
  potion.scale=0.3;

  mainRocket=createSprite(410,600,60,60);
  mainRocket.addImage(mainRocketImg);
  //mainRocket.scale=0.3;


  
  
}

function draw() {
  background(bg);  
  drawSprites();
}