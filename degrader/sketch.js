let degwade;

function setup() {
    createCanvas(windowWidth, windowHeight);
    degwade = circularGradiant(width, height,156,50,100,20,50,200);
}

function draw() {
    background(255);   
    image(degwade, 0, 0, width, height);

}
function linearGradiant(w, h, r1, v1, b1, r2, v2, b2){
    let graphic = createGraphics(w, h);    
    for(let compteur = 0 ; compteur < h ; compteur++ ) { 
        let red = map(compteur, 0, h, r1,r2);
        let green = map(compteur, 0, h, v1, v2); 
        let blue = map(compteur, 0, h, b1, b2);
        graphic.stroke(red, green, blue);
        graphic.line(0, compteur, w, compteur);
    }
    return graphic; 
    
}



function circularGradiant(w, h, r1, v1, b1, r2, v2, b2){
    let graphic = createGraphics(w, h);
    h = h*3;
    graphic.translate(graphic.width/2, )
    for(let compteur = 0 ; compteur < h ; compteur++ ) { 
        let red = map(compteur, 0, h, r1,r2);
        let green = map(compteur, 0, h, v1, v2); 
        let blue = map(compteur, 0, h, b1, b2);
        graphic.fill(red, green, blue);
        graphic.noStroke();
        graphic.ellipse(0, 0, h-compteur, h-compteur);
    }
    return graphic; 
    
}
