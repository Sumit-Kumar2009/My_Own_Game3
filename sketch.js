var bgGameplay,bgGameplayImg;
var bgStart, bgStartImg;
var bgStory, bgStoryImg;

var bulletImg;

var fireSound, fullSound;

var buyLifeImg, buyBulletImg;
var buyLife, buyBullet;

var collider1, collider2, collider3, collider4;

var player, shooterImg, shooter_shooting;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombie, zombieImg, destroyer, destroyerImg;

var playButton, playButtonImg;
var howButton, howButtonImg;
var homeButton, homeButtonImg;

var invisibleCollider1,invisibleCollider2,invisibleCollider3,invisibleCollider4;

var zombieGroup, destroyerGroup, bulletGroup;
var life = 3;
var kills = 0;
var destroyerLife = 0;
var no_of_bullet = 100;
var mins = 4;
var sec = 59;

var gameState = "start";
var hardness = "level1"

function preload(){
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgStartImg = loadImage("assets/start.jpeg")
  bgGameplayImg = loadImage("assets/gameplay.jpeg")
  bgStoryImg = loadImage("assets/story.jpeg")

  zombieImg = loadImage("assets/zombie.png")
  destroyerImg = loadImage("assets/destroyer.png")

  playButtonImg = loadImage("assets/play_button.png")
  howButtonImg = loadImage("assets/doubt.png")
  homeButtonImg = loadImage("assets/home.png")

  buyBulletImg = loadImage("assets/bulletButton.png")
  buyLifeImg = loadImage("assets/heartButton.png")

  bulletImg = loadImage("assets/bullet.png")
  fireSound = loadSound("assets/explosion.mp3")

  fullSound = loadSound("assets/enough.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);



  //adding the background image
  bgGameplay = createSprite(displayWidth/2,displayHeight/2,20,20)
bgGameplay.addImage(bgGameplayImg)
bgGameplay.scale = 1.2

bgStart = createSprite(displayWidth/2,displayHeight/2-60,20,20)
bgStart.addImage(bgStartImg)
bgStart.scale = 3.5

bgStory = createSprite(displayWidth/2,displayHeight/2-60,20,20)
bgStory.addImage(bgStoryImg)
bgStory.scale = 3.25

//creating the player sprite
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.25
  //player.debug = true
  player.setCollider("rectangle",0,0,280,420)

  playButton = createSprite(displayWidth/3-displayWidth/4+10, displayHeight/2-125, 50, 50);
  playButton.addImage(playButtonImg)
  playButton.scale = 0.09

  howButton = createSprite(displayWidth/3-displayWidth/4+10, displayHeight/2+75, 50, 50);
  howButton.addImage(howButtonImg)
  howButton.scale = 0.09

  homeButton = createSprite(75,40,50,50)
  homeButton.addImage(homeButtonImg)
  homeButton.scale = 0.05

  heart1 = createSprite(displayWidth - 150,40,20,20)
  heart1.visible = false
  heart1.addImage("heart1",heart1Img)
  heart1.scale = 0.4 

  heart2 = createSprite(displayWidth - 100,40,20,20)
  heart2.visible = false
  heart2.addImage("heart2",heart2Img)
  heart2.scale = 0.4 

  heart3 = createSprite(displayWidth - 150,40,20,20)
  heart3.visible = false
  heart3.addImage("heart3",heart3Img)
  heart3.scale = 0.4 

  buyBullet = createSprite(displayWidth/1.5 + displayWidth/8,displayHeight/2-225,50,50)
  buyBullet.addImage(buyBulletImg)
  buyBullet.scale = 0.04

  buyLife = createSprite(displayWidth/1.5 + displayWidth/8,displayHeight/2-325,50,50)
  buyLife.addImage(buyLifeImg)
  buyLife.scale=0.04

  invisibleCollider1 = createSprite(width/2,height/2-10,width,25)
  invisibleCollider1.visible = false

  invisibleCollider2 = createSprite(width/2,height,width,10)
  invisibleCollider2.visible = false

  invisibleCollider3 = createSprite(1,height/2,10,height)
  invisibleCollider3.visible = false

  invisibleCollider4 = createSprite(width,height/2,10,height)
  invisibleCollider4.visible = false

  zombieGroup = new Group();
  destroyerGroup = new Group();
  bulletGroup = new Group();

  player.visible = false;
  bgGameplay.visible = false;
  bgStart.visible = false;
  playButton.visible = false;
  howButton.visible = false;
  bgStory.visible = false;
  homeButton.visible = false;
  buyBullet.visible = false;
  buyLife.visible = false;
}

function draw() {
  background(0); 
  if(gameState==="start") {
    bgStart.visible = true,
    playButton.visible = true,
    howButton.visible = true

if(mousePressedOver(playButton)) {
      gameState = "gameplay";
    }

if(mousePressedOver(howButton)) {
  gameState = "controls";
}

    drawSprites();
  }

else if(gameState === "controls") {
  bgStart.visible = false,
    playButton.visible = false,
    howButton.visible = false,
    player.visible = false,
    bgGameplay.visible = false,
    bgStory.visible = true,
    homeButton.visible = true

    if(mousePressedOver(homeButton)) {
      gameState = "start",
      homeButton.visible = false,
      bgStory.visible = false
    }
  
  drawSprites();

  fill("yellow")
textFont("Algerian")
textSize(40)
text("Spacebar",50, displayHeight/2-350)

fill("yellow")
textFont("Algerian")
textSize(40)
text("up Arrow",50, displayHeight/2-270)

fill("yellow")
textFont("Algerian")
textSize(40)
text("down arrow",50, displayHeight/2-190)

fill("yellow")
textFont("Algerian")
textSize(40)
text("right arrow",50, displayHeight/2-110)

fill("yellow")
textFont("Algerian")
textSize(40)
text("left arrow",50, displayHeight/2-40)

fill("red")
textFont("Algerian")
textSize(40)
text("To shoot bullets from shotgun",displayWidth/2+25, displayHeight/2-350)

fill("red")
textFont("Algerian")
textSize(40)
text("to move upside",displayWidth/2+200, displayHeight/2-270)

fill("red")
textFont("Algerian")
textSize(40)
text("to move downside",displayWidth/2+175, displayHeight/2-190)

fill("red")
textFont("Algerian")
textSize(40)
text("to move front",displayWidth/2+200, displayHeight/2-110)

fill("red")
textFont("Algerian")
textSize(40)
text("to move back",displayWidth/2+200, displayHeight/2-40)

fill("orange")
textFont("Algerian")
textSize(40)
text("You can buy hearts with 5 kill for each.",displayWidth/2-500, displayHeight/2+40)

fill("orange")
textFont("Algerian")
textSize(40)
text("You can buy bullets with 1 kill for each.",displayWidth/2-495, displayHeight/2+120)

fill("orange")
textFont("Algerian")
textSize(40)
text("You can earn 1 kill by killing 1 zombie.",displayWidth/2-485, displayHeight/2+200)

fill("orange")
textFont("Algerian")
textSize(40)
text("You can earn 2 kills by killing 1 red zombie.",displayWidth/2-500, displayHeight/2+280)
}

else if(gameState === "gameplay") {
  bgStart.visible = false,
  playButton.visible = false,
  howButton.visible = false,
  player.visible = true,
  bgGameplay.visible = true,
  buyBullet.visible = true,
  buyLife.visible = true

    if(life===3){
      heart3.visible = true
      heart2.visible = false
      heart1.visible = false
    }

    if(life===2){
      heart3.visible = false
      heart2.visible = true
      heart1.visible = false
    }

    if(life===1) {
      heart3.visible = false
      heart2.visible = false
      heart1.visible = true
    }

    if(life===0){
      heart3.visible = false
      heart2.visible = false
      heart1.visible = false
      player.destroy();
      gameState = "end"
    }

    if(life===-1){
      life = 0
    }

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  createBullet();
  no_of_bullet = no_of_bullet-1
  fireSound.play()

}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 player.addImage(shooterImg)
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-20
}

if(zombieGroup.isTouching(player)) {
  for(var i=0;i<zombieGroup.length;i++) {
    if(zombieGroup[i].isTouching(player)) {
      zombieGroup[i].destroy()
      life=life - 1
    }
  }
}

if(zombieGroup.isTouching(bulletGroup)){
  kills = kills+1
  for(var i=0;i<zombieGroup.length;i++){     
      
   if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy()
        bulletGroup.destroyEach()
       
        } 
  
  }
}

if(destroyerGroup.isTouching(player)) {
  for(var i=0;i<destroyerGroup.length;i++) {
    if(destroyerGroup[i].isTouching(player)) {
      destroyerGroup[i].destroy()
      life=life - 2

    }
  }
}

if(destroyerGroup.isTouching(bulletGroup)){
  for(var i=0;i<destroyerGroup.length;i++){     
    if(destroyerGroup[i].isTouching(bulletGroup)){
        bulletGroup.destroyEach()
          kills=kills+2
          destroyerGroup[i].destroy()
        }
    } 
  }


if(no_of_bullet === 0) {
  gameState="end"
}

if(frameCount%45===0){
  sec = sec-1
}

if(sec===0){
  mins=mins-1
  sec=59
}

if (mins===-1 && sec===59){
  gameState="win"
}

if (mousePressedOver(buyLife)) {
  var extraLifePrice = 5
  if (life<3){
    if (kills>=extraLifePrice){
      kills = kills-extraLifePrice
      life= life+1
  }
}

  else if(life===3){
    life=life
  }

    if (kills<extraLifePrice){
      life=life
    }
}

if (mousePressedOver(buyBullet)) {
  var extraBulletPrice = 0.5
  if (no_of_bullet<100){
    if (kills>=extraBulletPrice){
      kills = kills-extraBulletPrice
      no_of_bullet= no_of_bullet+1
  }
}

  else if(no_of_bullet===100){
    no_of_bullet=no_of_bullet
  }

    if (kills<extraBulletPrice){
      no_of_bullet=no_of_bullet
    }}

player.collide(invisibleCollider1)
player.collide(invisibleCollider2)
player.collide(invisibleCollider3)
player.collide(invisibleCollider4)

if (mins===3 && sec===59){
  hardness = "level2"
}

else if (mins===2 && sec===59){
  hardness = "level3"
}

else if (mins===1 && sec===59){
  hardness = "level4"
}

else if (mins===0 && sec===59){
  hardness = "level5"
}

if (hardness==="level1"){
  enemyLevel1();
}

else if(hardness==="level2"){
  enemyLevel2();
}

else if(hardness==="level3"){
  enemyLevel3();
}

else if(hardness==="level4"){
  enemyLevel4();
}

else if(hardness==="level5"){
  enemyLevel5();
}

drawSprites();

textSize(30)
fill("#dc143c")
textFont("Algerian")
text("Lives = "+life,displayWidth/1.5 + displayWidth/5, displayHeight/2-330)

textSize(30)
fill("#dc143c")
textFont("Algerian")
text("Kills = "+kills,displayWidth/1.5 + displayWidth/5, displayHeight/2-280)

textSize(30)
fill("#ff7a00")
textFont("Algerian")
text("Bullets = "+no_of_bullet,displayWidth/1.5 + displayWidth/6, displayHeight/2-230)

textSize(50)
fill("darkgreen")
textFont("Algerian")
text("Time to Survive ="+mins+":"+sec,displayWidth/2-300, displayHeight/2-350)
}

else if (gameState === "end") {
  textSize(100)
fill("#dc143c")
textFont("Algerian")
text("You Lose",displayWidth/2-175, displayHeight/2-50)
}

else if (gameState === "win") {

  textSize(100)
fill("yellow")
textFont("Algerian")
text("You Won!",displayWidth/2-175, displayHeight/2-50)
}
}

function enemyLevel1(){
  if(frameCount%300===0){
    zombie = createSprite(random(width,width-25),random(height-40,height/2+50),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.145
    zombie.velocityX = -5
    //zombie.debug = true
    zombie.setCollider("rectangle",0,0,350,950)
    zombie.lifetime = 600
    zombieGroup.add(zombie)
  }

  if (frameCount%500===0){
    destroyer = createSprite(random(width,width-25),random(height-25,height/2+55),40,40)
    destroyer.addImage(destroyerImg)
    destroyer.scale = 0.2
    destroyer.velocityX = -32.75
    //destroyer.debug = true
    destroyer.setCollider("rectangle",0,0,350,950)
    destroyer.lifetime = 600
    destroyerGroup.add(destroyer)
  }
}
function enemyLevel2() {
  if(frameCount%450===0){
    destroyer = createSprite(random(width,width-25),random(height-25,height/2+55),40,40)
    destroyer.addImage(destroyerImg)
    destroyer.scale = 0.2
    destroyer.velocityX = -32.75
    //destroyer.debug = true
    destroyer.setCollider("rectangle",0,0,350,950)
    destroyer.lifetime = 600
    destroyerGroup.add(destroyer)
  }

  if(frameCount%250===0){
    zombie = createSprite(random(width,width-25),random(height-40,height/2+50),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.145
    zombie.velocityX = -5
    //zombie.debug = true
    zombie.setCollider("rectangle",0,0,350,950)
    zombie.lifetime = 600
    zombieGroup.add(zombie)
  }
}

function enemyLevel3() {
  if(frameCount%375===0){
    destroyer = createSprite(random(width,width-25),random(height-25,height/2+55),40,40)
    destroyer.addImage(destroyerImg)
    destroyer.scale = 0.2
    destroyer.velocityX = -30
    //destroyer.debug = true
    destroyer.setCollider("rectangle",0,0,350,950)
    destroyer.lifetime = 600
    destroyerGroup.add(destroyer)
  }

  if(frameCount%200===0){
    zombie = createSprite(random(width,width-25),random(height-40,height/2+50),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.145
    zombie.velocityX = -5
    //zombie.debug = true
    zombie.setCollider("rectangle",0,0,350,950)
    zombie.lifetime = 600
    zombieGroup.add(zombie)
  }
}

function enemyLevel4(){
  if(frameCount%240===0){
    destroyer = createSprite(random(width,width-25),random(height-25,height/2+55),40,40)
    destroyer.addImage(destroyerImg)
    destroyer.scale = 0.2
    destroyer.velocityX = -45
    //destroyer.debug = true
    destroyer.setCollider("rectangle",0,0,350,950)
    destroyer.lifetime = 600
    destroyerGroup.add(destroyer)
  }

  if(frameCount%100===0){
    zombie = createSprite(random(width,width-25),random(height-40,height/2+50),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.145
    zombie.velocityX = -6
    //zombie.debug = true
    zombie.setCollider("rectangle",0,0,350,950)
    zombie.lifetime = 600
    zombieGroup.add(zombie)
  }
}

function enemyLevel5(){
  if(frameCount%140===0){
    destroyer = createSprite(width,player.y,40,40)
    destroyer.addImage(destroyerImg)
    destroyer.scale = 0.2
    destroyer.velocityX = -50
    //destroyer.debug = true
    destroyer.setCollider("rectangle",0,0,350,950)
    destroyer.lifetime = 600
    destroyerGroup.add(destroyer)
  }

  if(frameCount%75===0){
    zombie = createSprite(random(width,width-25),random(height-40,height/2+50),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.145
    zombie.velocityX = -7.5
    //zombie.debug = true
    zombie.setCollider("rectangle",0,0,350,950)
    zombie.lifetime = 600
    zombieGroup.add(zombie)
  }
}

function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImg);
  bullet.x = player.x+7.5;
  bullet.y=player.y-20;
  bullet.velocityX = 60;
  bullet.lifetime = 500;
  bullet.scale = 0.1;
  bulletGroup.add(bullet);
   }

