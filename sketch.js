var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var ground, packageBody;
var boxBase, boxBaseSide1, BoxBaseSide2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
console.log("test")

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	var option = { restitution: 0.4829, isStatic: true }
	packageBody = Bodies.circle(width / 2, 200, 5, option)

	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	// let boxPosition = width / 2 - 100
	// let boxY = 610;


	// // supplybox = Bodies.rectangle(x,y,width)
	// boxBase = createSprite(boxPosition + 100, boxY + 40, 200, 20
	// )

	// boxBase.shapeColor = color(255, 0, 0);
	// boxBottom = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, { isStatic: true });
	// World.add(world, boxBottom)

	boxBase=new SupplyArea(400,660,200,20);
	boxBaseSide1=new SupplyArea(300,620,20,100);
	boxBaseSide2=new SupplyArea(500,620,20,100);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
    boxBase.display();
    boxBaseSide1.display();
    boxBaseSide2.display();
	drawSprites();
	keyPressed();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody, false);


	}
}



