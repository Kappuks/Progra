let snowFlakeSpeed = 1;
let flocons = [] ;
function setup() {
  createCanvas(windowWidth, windowHeight);
    
  for(let cmpt = 0 ; cmpt < 100 ;cmpt ++ ){
  flocons.push(new Flake());
    } 
}

function draw() {
  background(180, 50, 25);
    for(let cmpt = 0 ; cmpt < 100 ;cmpt ++ ){
    flocons[cmpt].display();
    }
}
class Flake{
    constructor(){
    this.posX = random(width);
    this.posY = 0;    
    }
    display(){
        fill(255);
        noStroke();
        ellipse(this.posX, this.posY,15 ,15);
        this.posY = this.posY + snowFlakeSpeed;
    }
}









