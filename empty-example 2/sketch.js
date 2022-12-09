function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
}

function draw() {
  // put drawing code here
    //pour avoir l'entièreté de la page en une couleur 
    
background(0);
    fill (255, 0, 0);
    //pour avoir un autre canvas dans le même canvas.
rect(
    100,
    100, 
    width - 2 * 100,
    height - 2 * 100
);
    //noter du texte dans notre canvas.
    fill(0)
    //pour que le point de repère soit au centre de la box et non en bas à gauche (le texte n'est pas centré)
    textSize(700)
    textAlign(CENTER, CENTER);
    text("Bonjour",width/2,height/2);
}

