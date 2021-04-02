var d = document.getElementById("dibujito"); // Etiqueta Canvas
var lienzo = d.getContext("2d");
var lineas = 30;
var contador = 0;
var min = 0;
var max = 255; 
var trazo_original, trazo_desplazado;

while(contador < lineas)
{
    trazo_original = 5 * contador;
    trazo_desplazado = 5 * (contador +1);
    dibujarLinea(getColor(min,max),0,trazo_original,trazo_desplazado,300);
    dibujarLinea(getColor(min,max),trazo_original,300,300,300-trazo_desplazado);
    dibujarLinea(getColor(min,max),300,300-trazo_original,300-trazo_desplazado,0);
    dibujarLinea(getColor(min,max),300-trazo_original,0,0,trazo_desplazado);
    contador ++;
}

dibujarLinea(getColor(min,max),1,1,1,299);
dibujarLinea(getColor(min,max),1,299,299,299);
dibujarLinea(getColor(min,max),299,299,299,1);
dibujarLinea(getColor(min,max),299,1,1,1);

function dibujarLinea(color,x_inicial,y_inicial,x_final,y_final) 
{
    lienzo.beginPath(); // Comienza el dibujo
    lienzo.strokeStyle = color; // Escoger el color de la línea
    lienzo.moveTo(x_inicial,y_inicial); // Dónde va a iniciar mi trazo
    lienzo.lineTo(x_final,y_final) // Dónde va a terminar mi trazo
    lienzo.stroke(); // Realizar el trazo
    lienzo.closePath(); // Acaba el dibujo   
}
// lienzo.clearRect(0, 0, d.width, d.height); // Limpiar Canvas.

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

/* 
while(contador < lineas)
{
    x_in = 10 * contador;
    y_in = 10 * contador;
    x_fin = 10 * (contador +1);
    y_fin = 300 - (10 * (contador +1));
    dibujarLinea("blue",0,y_in,x_fin,300);
    dibujarLinea("green",x_in,300,300,y_fin);
    contador ++;
}
*/

/*
for(contador = 0; contador < lineas; contador++)
{
    x_in = 10 * contador;
    y_in = 10 * contador;
    x_fin = 10 * (contador +1);
    y_fin = 300 - (10 * (contador +1));
    dibujarLinea("blue",0,y_in,x_fin,300);
    dibujarLinea("green",x_in,300,300,y_fin);
}
*/

/*
var y_in = 0;
var x_fin= 10;
while(contador < lineas)
{
    dibujarLinea("blue",0,y_in,x_fin,300);
    y_in += 10;
    x_fin += 10;
    contador ++;
}
*/