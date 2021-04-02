var teclas = {
    "trackpad" : 49,
    "mouse" : 50
}

var cuadrito = document.getElementById("area_Dibujo"); // Canvas Tag
var lienzo = cuadrito.getContext("2d"); // Método Canvas 
var x_ini=-1;
var y_ini;
var x,y,x1,y1;
var min = 0;
var max = 255; 
var opcion = 0;

document.addEventListener("keypress",opcionDibujar); // Escuchar Evento Mover Mouse
cuadrito.addEventListener("mousemove",dibujarMouse); // Escuchar Evento Mover Mouse
cuadrito.addEventListener("mousedown",coordenadasMouseDown); // Escuchar Evento Mover Mouse
cuadrito.addEventListener("mouseup",coordenadasMouseUp); // Escuchar Evento Mover Mouse
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
function opcionDibujar(e)
{
    if(e.keyCode==teclas.trackpad){
        opcion=1;
    }
    else if(e.keyCode==teclas.mouse){
        opcion=2;
    }
    else{
        opcion=0;
        console.log("Presiona una tecla para dibujar");
    }
}
function dibujarMouse(e)
{
    if(opcion==1){
        if(x_ini==-1){  // Sentencia para que la primera vez X no esté indefinida
            x_ini=e.layerX;
            y_ini=e.layerY;
            dibujarLinea(getColor(min,max),x_ini,y_ini,e.layerX,e.layerY);
        }
        else{
            dibujarLinea(getColor(min,max),x_ini,y_ini,e.layerX,e.layerY);
            x_ini=e.layerX;
            y_ini=e.layerY;
        }
    }
}
function coordenadasMouseDown(e)
{
    x= e.layerX;
    y= e.layerY;
}
function coordenadasMouseUp(e)
{
    if(opcion==2)
    {
        x1= e.layerX;
        y1= e.layerY;
        dibujarLinea("red",x,y,x1,y1);
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
function rgbToHex(rgb)
{
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