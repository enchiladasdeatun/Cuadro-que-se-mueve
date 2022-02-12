var cuadrado 






function setup() {
  createCanvas(400,400);

cuadrado = createSprite (200, 200, 50, 50);

}

function draw() 
{
  background(30);

if(keyIsDown(RIGHT_ARROW)){ 

cuadrado.position.x = cuadrado.position.x +5;

}
if(keyIsDown(LEFT_ARROW)){ 

  cuadrado.position.x = cuadrado.position.x -5;
  
  }

  if(keyIsDown(UP_ARROW)){ 

    cuadrado.position.y = cuadrado.position.y -5;
    
    }
    if(keyIsDown(DOWN_ARROW)){ 

      cuadrado.position.y = cuadrado.position.y +5;
      
      }



drawSprites();

}



