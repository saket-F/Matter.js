
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var myEngine, myworld

var object,ground,ball;


function setup() {
  createCanvas(400,400);

   myEngine = Engine.create()

   //myworld is myEngine's world

   myworld = myEngine.world;


   var options =
   {
     isStatic: true
   }

   ground = Bodies.rectangle(200,350,400,50,options)
   World.add(myworld,ground)
  
   var options =
   {
    restitution: 1.0
   }
   ball = Bodies.circle(200,200,20,options);
   World.add(myworld,ball)


   //console.log(object.position.x);



  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  Engine.update(myEngine)

  rectMode(CENTER)

  rect(ground.position.x,ground.position.y,400,50)

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}