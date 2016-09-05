function preload(){
    caracol = loadImage("media/animacion1/caracol.png");
    hormiga = loadImage("media/animacion1/hormiga.png");
    cronometro = loadImage("media/animacion1/cronometro.png");
    fondo = loadImage("media/animacion1/fondo.png");
}

function setup() {
    var cnv = createCanvas(950, 400);
    cnv.parent("p5");

    imageMode(CENTER);
}

function draw() {
    console.log(mouseX, mouseY);

    background(255);

    image(fondo, 392, 216);
    image(hormiga, 116, 133);
    image(caracol, 116, 313);

}