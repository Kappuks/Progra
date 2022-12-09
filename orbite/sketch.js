function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER); 
    
    noStroke();

}

function draw() {
  // put drawing code here
    background(0);
    //pour décaler le point de référence au milieu de l'écran
    translate(width/2, height/2);
    
    push();//rectSoleil
    rotate( millis()/3000);
    fill(255, 255, 107);
    rect(0,0,50,50);
    
     push();//rectTerre
    rotate(millis()/3000);
    translate(100,0);
    rotate(millis()/5000);
    fill(0,128,255);
    rect(0,0,13,13)
    
        push();//rectLuneTerre
        rotate(millis()/3000);
        translate(18,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
     pop();
    
     
    
      push();//rectVénus
    rotate(millis()/2075);
    translate(70,0);
    rotate(millis()/2000);
    fill(64, 255, 0);
    rect(0,0,8,8);
    pop();
    
    
    push();//rectMercure
    rotate(millis()/1300);
    translate(50,0);
    rotate(millis()/3500);
    fill(255, 64, 0);
    rect(0,0,8,8);
    pop();
    
    
     push();//rectMars
    rotate(millis()/1700);
    translate(150,0);
    rotate(millis()/1000);
    fill(223, 109, 20)
    rect(0,0,12,12);
    
        push();//rectluneMars
        rotate(millis()/1500);
        translate(20,0);
        rotate(millis()/1000);
        fill(179, 177, 145)
        rect(0,0,5,5);
        pop();
    
        push();//rectluneMars
        rotate(millis()/1100);
        translate(16,0);
        rotate(millis()/1000);
        fill(179, 177, 145)
        rect(0,0,5,5);
        pop();
    
    pop();
    
    
    push();//rectJupiter
    rotate(millis()/2300);
    translate(190,0);
    rotate(millis()/1000);
    fill(209, 182, 6)
    rect(0,0,35,35);
    
    
        push();//rectLuneJupiter
        rotate(millis()/1900);
        translate(32,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
        push();//rectLuneJupiter
        rotate(millis()/1085);
        translate(36,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
        push();//rectLuneJupiter
        rotate(millis()/1300);
        translate(38,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
        push();//rectLuneJupiter
        rotate(millis()/1600);
        translate(40,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
        push();//rectLuneJupiter
        rotate(millis()/1000);
        translate(42,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
        push();//rectLuneJupiter
        rotate(millis()/900);
        translate(45,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,5,5)
        pop();
    
    
    pop();
        
    
     push();//rectSaturne
    rotate(millis()/2000);
    translate(260,0);
    rotate(millis()/2000);
    fill(0, 255, 255)
    rect(0,0,20,20);
    ellipse(0,0,10,28);
    pop();
    
    push();//rectNeptune
    rotate(millis()/1890);
    translate(330,0);
    rotate(millis()/2000);
    fill(16, 52, 166)
    rect(0,0,20,20);
    
        push();//rectLuneNeptune
        rotate(millis()/2000);
        translate(24,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,3,3)
        pop();
    
        push();//rectLuneNeptune
        rotate(millis()/1000);
        translate(29,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,3,3)
        pop();
    
         push();//rectLuneNeptune
        rotate(millis()/1500);
        translate(33,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,3,3)
        pop();
    
         push();//rectLuneNeptune
        rotate(millis()/1700);
        translate(36,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,3,3)
        pop();
    
        push();//rectLuneNeptune
        rotate(millis()/1900);
        translate(40,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,3,3)
        pop();
    
        push();//rectLuneNeptune
        rotate(millis()/2300);
        translate(47,0);
        rotate(millis()/5000);
        fill(179, 177, 145);
        rect(0,0,3,3)
        pop();
    
    
        pop();
    
     pop();
    
  
    
   
    
    
}