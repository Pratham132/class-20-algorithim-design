var r1,r2


function setup() {
  createCanvas(800,400);
  //creating sprites
  r1=createSprite(200,100,50,100)
  r2=createSprite(400, 100, 50, 50);
  // calculating distance between r1 and r2
  console.log(r1.x-r2.x)
  console.log(r1.width/2+r2.width/2)
  //r2.velocityX = -3
}

function draw() {
  background("green"); 
  // moving r2 using mouse 
  // r2.x=mouseX
  // r2.y=mouseY
  //console.log(r1.x-r2.x)
  //console.log(r1.width/2+r2.width/2)
  r2.velocityx = -3
  //Algorithim to check collision
  if(r1.x-r2.x>r1.width/2+r2.width/2 ||
    r2.x-r1.x>r1.width/2+r2.width/2 ||
    r1.y-r2.y>r1.height/2+r2.height/2 ||
    r2.y-r1.y>r1.height/2+r2.height/2
    ){
    r1.shapeColor = "blue"
    r2.shapeColor = "blue"
  }
  else{
    r1.shapeColor = 'black'
  }
  
  // Algorithim for detectin collision when object is moving and stopping the object
  if(r1.x-r2.x>r1.width/2+r2.width/2 ||
    r2.x-r1.x>r1.width/2+r2.width/2 ||
    r1.y-r2.y>r1.height/2+r2.height/2 ||
    r2.y-r1.y>r1.height/2+r2.height/2
    ){
    r1.shapeColor = "blue"
    r2.shapeColor = "blue"
    r1.velocityX = 0
    r2.velocityX = 0
  }
  else{
    r1.shapeColor = 'black'
  }
  drawSprites();
}