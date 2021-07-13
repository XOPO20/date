const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }


    Engine.update(engine);

    // write code to display time in correct format here
 t = new Date()
 text("time= "+t.getHours(),200,200)
 

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var req = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var JSONN = await req.json();

    // write code slice the datetime
    var dt = JSONN.datetime
    var h = dt.slice(11,13)


    // add conditions to change the background images from sunrise to sunset
    if(h>=04 && h<=06)
    bg = "sunrise1.png"

   else if(h>=07 && h<=09)
    bg = "sunrise2.png"

   else if(h>=09 && h<=11)
    bg = "sunrise3.png"

   else if(h>=11 && h<=13)
    bg = "sunrise4.png"

  else  if(h>=13 && h<=15)
    bg = "sunrise5.png"

  else  if(h>=15 && h<=17)
    bg = "sunrise6.png"

  else  if(h>=17 && h<=19)
    bg = "sunrise7.png"

   else if(h>=19 && h<=21)
    bg = "sunrise8.png"

  else  if(h>=21 && h<=23)
    bg = "sunrise9.png"

  else  if(h>=23 && h<=00)
    bg = "sunrise10.png"

   else if(h>=00 && h<=02)
    bg = "sunrise11.png"

   else 
    bg = "sunrise12.png"






    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
