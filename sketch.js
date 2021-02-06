var gun,gunImage,bullet,bulletImage, bottle1, bottle1Image, bottle2, bottle2Image, bottle3, bottle3Image, bottle4, bottle4Image, bottle5, bottle5Image;

var score = 0;

function preload(){
  
  gunImage = loadImage("GUN.png")
  bulletImage = loadImage("BU1.png");
  bottle1Image = loadImage("B1.png")
  bottle2Image = loadImage("B2.png")
  bottle3Image = loadImage("B3.png")
  bottle4Image = loadImage("B4.png")
  bottle5Image = loadImage("B5.png")
  
}


function setup(){
  createCanvas(700,400);
  
  gun = createSprite(630,200,50,50);
  gun.addImage(gunImage);
  gun.scale = 0.3
  
  
  bottleGroup = new Group();
  bulletGroup = new Group();
  
}

function draw(){
  background("white");
  
  gun.y = World.mouseY;
  
  
  if (keyDown("space")) {
    createBullet();
    
  }
  
    //creating continous enemies
  var select_bottle = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_bottle == 1) {
      bottle1();
    } else if (select_bottle == 2) {
      bottle2();
    } else if (select_bottle == 3) {
      bottle3();
    } else if (select_bottle == 4) {
      bottle4();
    } else {
      bottle5();
    }
  }
  
   if (bulletGroup.isTouching(bottleGroup)) {
  bottleGroup.destroyEach();
 bulletGroup.destroyEach();
    score=score+1;
   }
  
  
  drawSprites();
  
}

 function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImage);
  bullet.x = 360;
  bullet.y=gun.y;
  bullet.velocityX = -4;
  bullet.lifetime = 100;
  bullet.scale = 0.1;
  bulletGroup.add(bullet);   
}

function bottle1() {
  var b1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  b1.addImage(bottle1Image);
  b1.velocityX = 3;
  b1.lifetime = 180;
  b1.scale = 0.3;
  bottleGroup.add(b1);
}

function bottle2() {
  var b2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  b2.addImage(bottle2Image);
  b2.velocityX = 3;
  b2.lifetime = 180;
  b2.scale = 0.3;
  bottleGroup.add(b2);
}

function bottle3() {
  var b3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  b3.addImage(bottle3Image);
  b3.velocityX = 3;
  b3.lifetime = 180;
  b3.scale = 0.3;
   bottleGroup.add(b3);
}

function bottle4() {
  var b4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  b4.addImage(bottle4Image);
  b4.velocityX = 3;
  b4.lifetime = 180;
  b4.scale = 0.3;
   bottleGroup.add(b4);
}

function bottle5() {
  var b5 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  b5.addImage(bottle5Image);
  b5.velocityX = 3;
  b5.lifetime = 180;
  b5.scale = 0.3;
   bottleGroup.add(b5);
}
