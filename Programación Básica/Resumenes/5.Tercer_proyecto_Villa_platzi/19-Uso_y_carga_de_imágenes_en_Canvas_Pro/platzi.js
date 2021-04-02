/***************** VARIABLES PRINCIPALES *****************/

var canvas = document.getElementById("villaplatzi"); // Canvas Tag
var paper = canvas.getContext("2d"); // Canvas Context
var min = 0; // Número Mínimo 
var max = canvas.width - 80; // Número Máximo / Tamaño Canvas - Tamaño Imagen
var x_ini = 250; // Posición Inicial X
var y_ini = 250; // Posición Inicial Y 
var desplazamiento= 10; // Desplazamiento Personaje
var numeroVacas= randomNumber(0,10); 
var numeroCerdos= randomNumber(0,10);

/***************** VARIABLES PRINCIPALES *****************/

/***************** GUARDAR POSICIÓN ORIGINAL *****************/
var posicionVacasX = {};
var posicionVacasY = {};
var posicionCerdosX = {};
var posicionCerdosY = {};
/***************** GUARDAR POSICIÓN ORIGINAL *****************/

/***************** OBJETOS JSON *****************/

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var Animales = {
    vaca : {    url : "vaca.png",
                    cargaOk : false 
    },
    cerdo : {   url : "cerdo.png",
                    cargaOk : false 
    },
    pollo : {   url : "pollo.png",
                    cargaOk : false 
    }
}

var Mapa = {
    fondo : {   url : "tile.png",
                    cargaOk : false 
    }
}

/***************** OBJETOS JSON *****************/

/***************** CREACIÓN INSTANCIA IMAGEN *****************/

Mapa.fondo.imagen = new Image();
Mapa.fondo.imagen.src = Mapa.fondo.url;

Animales.vaca.imagen = new Image();
Animales.vaca.imagen.src = Animales.vaca.url;

Animales.cerdo.imagen = new Image();
Animales.cerdo.imagen.src = Animales.cerdo.url;
 
Animales.pollo.imagen = new Image();
Animales.pollo.imagen.src = Animales.pollo.url;

/***************** CREACIÓN INSTANCIA IMAGEN *****************/

/***************** EVENTO CARGAR IMAGEN *****************/

Mapa.fondo.imagen.addEventListener("load",cargarFondo);
Animales.vaca.imagen.addEventListener("load",cargarVaca);
Animales.cerdo.imagen.addEventListener("load",cargarCerdo);
Animales.pollo.imagen.addEventListener("load",cargarPollo);

/***************** EVENTO CARGAR IMAGEN *****************/

/***************** EVENTO OPRIMIR TECLA *****************/

document.addEventListener("keydown",moverPollo);

/***************** EVENTO OPRIMIR TECLA *****************/

/***************** IMÁGENES CARGADAS *****************/

function cargarFondo(){
    Mapa.fondo.cargaOk = true;
    dibujar();
}

function cargarVaca(){
    Animales.vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo(){
    Animales.cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo(){
    Animales.pollo.cargaOk = true;
    dibujar();
}

/***************** IMÁGENES CARGADAS *****************/

/*****************  VERIFICAR SI YA CARGARON LAS IMÁGENES PARA DIBUJARLAS *****************/

function dibujar(){    
    if(Mapa.fondo.cargaOk&&Animales.vaca.cargaOk&&Animales.cerdo.cargaOk&&Animales.pollo.cargaOk){

        paper.drawImage(Mapa.fondo.imagen,0,0);

        for(var i=0; i<numeroVacas; i++){
            paper.drawImage(Animales.vaca.imagen,posicionVacasX[i]=randomNumber(min,max),posicionVacasY[i]=randomNumber(min,max));
        }
        for(var i=0; i<numeroCerdos; i++){
            paper.drawImage(Animales.cerdo.imagen,posicionCerdosX[i]=randomNumber(min,max),posicionCerdosY[i]=randomNumber(min,max));
        }

        paper.drawImage(Animales.pollo.imagen,x_ini,y_ini); // Primera vez que aparece en la posición inicial
    }   
}

/*****************  VERIFICAR SI YA CARGARON LAS IMÁGENES PARA DIBUJARLAS *****************/

/***************** NÚMERO ALEATORIO *****************/

function randomNumber(min,max){
    var resultado = Math.floor((Math.random()*(max-min+1))+min) 
    return resultado;
}

/***************** NÚMERO ALEATORIO *****************/

/***************** MOVER CON LAS FLECHAS A UN ANIMAL *****************/

function moverPollo(e){
    if(Mapa.fondo.cargaOk&&Animales.vaca.cargaOk&&Animales.cerdo.cargaOk&&Animales.pollo.cargaOk){
        switch(e.keyCode){
            case teclas.UP:
                redibujarEscenario();
                paper.drawImage(Animales.pollo.imagen,x_ini,y_ini-desplazamiento); 
                y_ini= y_ini-desplazamiento;
            break;

            case teclas.DOWN:
                redibujarEscenario();
                paper.drawImage(Animales.pollo.imagen,x_ini,y_ini+desplazamiento); 
                y_ini= y_ini+desplazamiento;
            break;

            case teclas.LEFT:
                redibujarEscenario();
                paper.drawImage(Animales.pollo.imagen,x_ini-desplazamiento,y_ini); 
                x_ini= x_ini-desplazamiento;
            break;

            case teclas.RIGHT:
                redibujarEscenario();
                paper.drawImage(Animales.pollo.imagen,x_ini+desplazamiento,y_ini); 
                x_ini= x_ini+desplazamiento;
            break;
            default:
                console.log("Otra Tecla");
        }
    }
}

/***************** MOVER CON LAS FLECHAS A UN ANIMAL *****************/

/***************** VOLVER A DIBUJAR EL ESCENARIO ALEATORIO *****************/

function redibujarEscenario(){

    paper.drawImage(Mapa.fondo.imagen,0,0);

    for(var i=0; i<numeroVacas; i++){
        paper.drawImage(Animales.vaca.imagen,posicionVacasX[i],posicionVacasY[i]);
    }
    for(var i=0; i<numeroCerdos; i++){
        paper.drawImage(Animales.cerdo.imagen,posicionCerdosX[i],posicionCerdosY[i]);
    }

}

/***************** VOLVER A DIBUJAR EL ESCENARIO ALEATORIO *****************/