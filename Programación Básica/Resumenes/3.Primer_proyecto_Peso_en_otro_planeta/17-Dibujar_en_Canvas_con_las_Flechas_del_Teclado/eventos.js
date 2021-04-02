var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
//console.log(teclas);

var cuadrito = document.getElementById("area"); // Canvas Tag
var lienzo = cuadrito.getContext("2d"); // Método Canvas 
var x = 150;
var y = 150;
var min = 0;
var max = 255; 
var desplazamiento =10;

document.addEventListener("keydown",dibujarTeclado); // Escuchar Evento Tecla Oprimida
dibujarLinea("red",x-1,y-1,x+1,y+1); // Inicializar Dibujo

function dibujarLinea(color,x_inicial,y_inicial,x_final,y_final) 
{
    lienzo.beginPath(); // Comienza el dibujo
    lienzo.strokeStyle = color; // Escoger el color de la línea
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial,y_inicial); // Dónde va a iniciar mi trazo
    lienzo.lineTo(x_final,y_final) // Dónde va a terminar mi trazo
    lienzo.stroke(); // Realizar el trazo
    lienzo.closePath(); // Acaba el dibujo   
}

function dibujarTeclado(e){
    switch(e.keyCode){
        case teclas.UP:
            dibujarLinea(getColor(min,max),x,y,x,y-desplazamiento);
            y= y-desplazamiento;
        break;

        case teclas.DOWN:
            dibujarLinea(getColor(min,max),x,y,x,y+desplazamiento);
            y= y+desplazamiento;
        break;

        case teclas.LEFT:
            dibujarLinea(getColor(min,max),x,y,x-desplazamiento,y);
            x= x-desplazamiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(getColor(min,max),x,y,x+desplazamiento,y);
            x= x+desplazamiento;
        break;
        default:
            console.log("Otra Tecla");
    }
}

function getColor(min, max) 
{  
    var r = randomNumber(min, max);
    var g = randomNumber(min, max);
    var b = randomNumber(min, max);
    return fullColorHex(r,g,b);
};

function randomNumber(min, max)
{
    return (Math.floor(Math.random() * (max - min)) + min); // Retorna un número entre 0 y 255
};

function rgbToHex(rgb){
    var hex = rgb.toString(16); // Número RGB a Hexadecimal
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function fullColorHex (r, g, b)
{   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red + green + blue; 
};