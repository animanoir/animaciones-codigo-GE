function preload() {
    imgCaracol = loadImage("media/animacion1/caracol.png");
    imgHormiga = loadImage("media/animacion1/hormiga.png");
    imgCronohormiga = loadImage("media/animacion1/cronHormiga.png");
    imgCronocaracol = loadImage("media/animacion1/cronCaracol.png");
    imgFondo = loadImage("media/animacion1/fondo.png");
}

function setup() {
    var cnv = createCanvas(950, 400);
    cnv.parent("p5");

    c1 = new Caracol();
    h1 = new Hormiga();

    imageMode(CENTER);
}

function draw() {

    console.log(mouseX, mouseY);

    background(255);

    image(imgFondo, 392, 216); //Fondo

    c1.display(); //Caracol
    h1.display(); //Hormiga

    //Tiempo en lo que comienzan a correr.
    setTimeout(function () {
        c1.correr();
        h1.correr();
    }, 1000);

    c1.llegarMeta();
    c1.mostrarCrono();
    h1.llegarMeta();
    h1.mostrarCrono();

}

//Hormiga
function Hormiga() {
    this.x = 116;
    this.y = 133;
    this.llegoMeta = false;
    this.imgHormiga = imgHormiga;

    this.mostrarCrono = function () {
        if (this.llegarMeta) {
            image(imgCronohormiga, 865, 112);
        }
    };

    this.display = function () {
        image(imgHormiga, this.x, this.y);
    };

    //Hace que corra. Si ya llegó a la meta, deja de correr.
    this.correr = function () {
        if (!this.llegoMeta) {
            this.x += 5;
        } else {
            this.x = this.x;
        }
    };

    //Checa si llegó a la meta
    this.llegarMeta = function () {
        if (this.x >= 725) {
            this.llegoMeta = true;
        }
    };


}

//Caracol
function Caracol() {
    this.x = 116;
    this.y = 313;
    this.llegoMeta = false;
    this.imgCaracol = imgCaracol;

    this.display = function () {
        image(imgCaracol, this.x, this.y);
    };

    this.correr = function () {
        if (!this.llegoMeta) {
            this.x += 2;
        } else {
            this.x = this.x;
        }
    };

    this.llegarMeta = function () {
        if (this.x >= 725) {
            this.llegoMeta = true;
        }
    };

    this.mostrarCrono = function () {
        if (this.llegarMeta) {
            alpha = 255;
            tint(255, 255, 255, alpha);
            image(imgCaracol, 865, 301);
        }
    };
}