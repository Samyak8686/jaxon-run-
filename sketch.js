var pathImg,jakeImg,coinImg


function preload(){
 jakeImg = loadAnimation("Runner-1.png","Runner-2.png");
 pathImg=loadImage("path.png");
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  pathImg=createSpites(200,200); 
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30

 jake=createSpites(180,340);
 jake.addAnimation("running" , jakeImg )
}


function draw() {
  background(0);
  if (keyDown("left")) {
    jack.velocityX = -3;
  }

  if (keyDown("right")) {
    jack.velocityX = 3;
  }

  if (path.y > 400) {
    path.y = height/2;
  }

drawSpirtes();
}
